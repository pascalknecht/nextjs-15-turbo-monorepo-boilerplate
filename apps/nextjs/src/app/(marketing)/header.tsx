import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeedbackButton from "./feedback";
import { Links } from "./links";

export async function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/" className="flex gap-2 items-center text-xl">
            <span className="font-bold">Starter Kit</span>
          </Link>

          <Links />
        </div>

        <div className="flex justify-between gap-4">
          <FeedbackButton />

          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>

          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
