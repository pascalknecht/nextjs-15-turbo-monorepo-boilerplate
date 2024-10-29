import React from "react";
import { LoginForm } from "./login-form";
import { getSSRSession } from "@/lib/get-server-session";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { isLoggedIn } = await getSSRSession();

  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <div className="px-4 py-12">
      <LoginForm />
    </div>
  );
}
