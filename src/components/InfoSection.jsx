import React from "react";

function InfoSection() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-60 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/car9.jpg"
                  className="absolute inset-0 h-[100%] w-[100%] object-cover rounded-2xl"
                  style={{
                    boxShadow: "0px 0px 10px 1px rgba(215, 217, 223, 1)",
                  }}
                />
              </div>
            </div>

            <div
              className="relative flex items-center rounded-tr-2xl rounded-br-2xl"
              style={{
                background: "rgba(222, 224, 222, 1)",
                backgroundImage:
                  "linear-gradient(0deg, rgba(222, 224, 222, 1) 0%, rgba(255, 255, 255, 1) 53%, rgba(222, 224, 222, 1) 100%)",
              }}
            >
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 rounded-tl-2xl rounded-bl-2xl"
                style={{
                  background: "rgba(222, 224, 222, 1)",
                  backgroundImage:
                    "linear-gradient(0deg, rgba(222, 224, 222, 1) 0%, rgba(255, 255, 255, 1) 53%, rgba(222, 224, 222, 1) 100%)",
                }}
              ></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-[3xl] font-bold sm:text-[35px]">
                  Connecting Buyers and Sellers, One Car at a Time
                </h2>

                <p className="mt-4 text-gray-600 text-xl">
                  CarConnect is a cutting-edge marketplace application that
                  simplifies the process of buying and selling cars online. With
                  a sleek and user-friendly design, CarConnect offers a seamless
                  experience for users to browse, compare, and purchase vehicles
                  from trusted sellers.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoSection;
