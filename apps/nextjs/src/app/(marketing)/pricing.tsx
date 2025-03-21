import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your financial needs. No hidden
            fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">
              Essential banking for individuals
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Free debit card</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Up to 5 free transfers/month</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Basic financial insights</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Mobile banking app</span>
              </li>
            </ul>
            <Link
              href="#"
              className="block w-full py-3 px-4 bg-white text-green-800 text-center rounded-md border border-green-800 hover:bg-green-50 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Standard Plan */}
          <div className="bg-green-800 p-8 rounded-xl border border-green-800 shadow-md relative">
            <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Standard</h3>
            <p className="text-green-100 mb-4">Perfect for active users</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$9.99</span>
              <span className="text-green-100">/month</span>
            </div>
            <ul className="space-y-3 mb-8 text-white">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-300 mr-2" />
                <span>Free premium debit card</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-300 mr-2" />
                <span>Unlimited transfers</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-300 mr-2" />
                <span>Advanced financial insights</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-300 mr-2" />
                <span>Priority customer support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-300 mr-2" />
                <span>1% cashback on purchases</span>
              </li>
            </ul>
            <Link
              href="#"
              className="block w-full py-3 px-4 bg-white text-green-800 text-center rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">For businesses and families</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$24.99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Multiple premium cards</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Unlimited global transfers</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Personalized financial advisor</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>24/7 dedicated support line</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>2.5% cashback on all purchases</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span>Family account management</span>
              </li>
            </ul>
            <Link
              href="#"
              className="block w-full py-3 px-4 bg-white text-green-800 text-center rounded-md border border-green-800 hover:bg-green-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
