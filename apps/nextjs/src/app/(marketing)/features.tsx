import { Clock, CreditCard, PieChart, Shield, Users, Zap } from "lucide-react";
import React from "react";

export function FeaturesSection() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Banking</h3>
              <p className="text-gray-600">
                Industry-leading security protocols to keep your financial data
                and transactions safe at all times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Transfers</h3>
              <p className="text-gray-600">
                Send and receive money instantly with our lightning-fast
                transfer system, both domestic and international.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated customer service team is available around the
                clock to assist with any questions or concerns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Cards</h3>
              <p className="text-gray-600">
                Advanced card technology with customizable limits, instant
                freeze options, and rewards on every purchase.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Insights</h3>
              <p className="text-gray-600">
                Detailed analytics and personalized insights to help you
                understand and improve your financial health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Accounts</h3>
              <p className="text-gray-600">
                Create linked accounts for family members with customizable
                permissions and spending limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with Fortress Financial is simple and
              straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
              <p className="text-gray-600">
                Sign up in minutes with our simple registration process. All you
                need is a valid ID and proof of address.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Link Your Accounts</h3>
              <p className="text-gray-600">
                Connect your existing accounts or start fresh. Our secure system
                makes transfers and setup easy.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Start Banking Smarter</h3>
              <p className="text-gray-600">
                Enjoy all the features and benefits of Fortress Financial, from
                smart analytics to secure transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
