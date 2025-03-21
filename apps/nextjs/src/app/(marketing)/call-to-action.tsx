import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
