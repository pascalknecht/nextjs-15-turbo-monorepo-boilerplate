import React from "react";
import Link from "next/link";
import Image from "next/image";

export async function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors"
        >
          Why Choose Us?
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors"
        >
          How It Works?
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors"
        >
          Social Proof
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors"
        >
          Pricing
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm font-medium hover:text-green-800 transition-colors"
        >
          Log In
        </Link>
        <Link
          href="/register"
          className="bg-green-800 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Get Started For Free
        </Link>
      </div>
    </header>
  );
}
