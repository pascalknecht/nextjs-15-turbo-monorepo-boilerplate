import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="container mx-auto px-4 pt-2">
        <div className="bg-green-50 py-16 md:py-20 rounded-3xl">
          <div className="px-4 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="#"
                className="bg-green-800 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                Get Started for Free <ArrowRight size={16} />
              </Link>
              <Link
                href="#"
                className="bg-white text-green-800 font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 border border-green-100 hover:bg-green-50 transition-colors"
              >
                Watch Demo <Play size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/placeholder.svg?height=600&width=1000"
            width={1000}
            height={600}
            alt=""
            className="w-full h-auto rounded-xl shadow-xl"
            priority
          />
        </div>
      </section>
    </>
  );
}
