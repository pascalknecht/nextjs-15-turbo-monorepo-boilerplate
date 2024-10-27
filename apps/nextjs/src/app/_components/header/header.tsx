import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeedbackButton from "./feedback";
import { Links } from "./links";
import Image from "next/image";

export async function Header() {
  return (
    <div className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/" className="flex gap-2 items-center text-xl">
            <Image
              className="rounded w-8 h-8"
              width="50"
              height="50"
              src="/computer.jpeg"
              alt="hero image"
            />
            <span className="font-bold">StarterKit</span>
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
    </div>
  );
}
