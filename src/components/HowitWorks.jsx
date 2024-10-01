import { SignInButton } from "@clerk/clerk-react";
import { TbLockCog } from "react-icons/tb";
import { FaSearchengin } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiChartDonutDuotone } from "react-icons/pi";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import React from "react";

function HowitWorks() {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-slate-950">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-0">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl text-gray-200">
                HOW IT WORKS
              </h2>

              <p className="mt-4 text-gray-400 text-justify">
                CarConnect is a cutting-edge marketplace that redefines the way
                people buy and sell cars, addressing common pain points in the
                automotive transaction process. Our mission is to create a
                seamless, efficient, and engaging platform that connects buyers
                and sellers, fostering trust and transparency in every
                transaction.
              </p>

              <SignInButton className="bg-green-700 hover:bg-green-600 p-2 my-6 w-[180px] h-12 rounded-sm font-bold text-gray-300">
                Get started today
              </SignInButton>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {/* Icons grid */}
              <a
                className="block rounded-xl border border-green-100 p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <TbLockCog />
                </span>

                <h2 className="mt-2 font-bold text-white">
                  User Registration & Authentication
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  Secure user auth. and all transac. are protected
                </p>
              </a>
              <a
                className="block rounded-xl border border-green-100 p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaSearchengin />
                </span>

                <h2 className="mt-2 font-bold text-white">
                  Browsing & Searching Cars
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  Advanced search, allow users to find cars.
                </p>
              </a>
              <a
                className="block rounded-xl border border-green-100 p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <LuMessagesSquare />
                </span>

                <h2 className="mt-2 font-bold text-white">
                  Real-Time Messaging
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  Create detailed listings to showcase their vehicles.
                </p>
              </a>
              <a
                className="block rounded-xl border border-green-100 p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaHandHoldingDollar />
                </span>

                <h2 className="mt-2 font-bold text-white">
                  Listing a Car for Sale
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  Create detailed listings to showcase their vehicles.
                </p>
              </a>
              <a
                className="block rounded-xl border border-green-100 p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <PiChartDonutDuotone />
                </span>

                <h2 className="mt-2 font-bold text-white">
                  Data Management & API Integration
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  Efficient data manage and API integrations.
                </p>
              </a>
              <a
                className="block rounded-xl border border-green-100 p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <AiOutlineDeploymentUnit />
                </span>

                <h2 className="mt-2 font-bold text-white">
                  Deployment & Hosting
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  Fast and reliable deployment on Vercel
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowitWorks;
