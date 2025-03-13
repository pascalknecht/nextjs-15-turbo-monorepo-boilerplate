import React from "react";
import { LoginForm } from "./login-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="px-4 py-12">
      <LoginForm />
    </div>
  );
}
