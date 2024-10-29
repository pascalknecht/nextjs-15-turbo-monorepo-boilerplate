"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center pb-24">
        <h1 className="text-4xl mt-24">Subscription Successful</h1>
        <p>Thank you for subscribing!</p>
        <p>redirecting to your dashboard...</p>
        <Loader2 className="mr-2 h-24 w-24 animate-spin" />
      </div>
    </>
  );
}
