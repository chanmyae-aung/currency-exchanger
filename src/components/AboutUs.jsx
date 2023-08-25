import React from "react";
import AboutCard from "./AboutCard";

export default function AboutUs() {
  return (
    <main id="about">
      
      
      <section className="flex flex-col w-full gap-10 justify-center px-20">
        <div className="text-center">
          <h1 className="text-3xl">About Us</h1>
          <p className="text-lg text-slate-700 px-32">
          We don’t do complicated, automated systems. We have offices around the world, and we’re here to help you whenever you need it.
          </p>
        </div>
        <div className="flex gap-10">
          <AboutCard />
          <AboutCard business />
        </div>
        <div className="flex gap-10">
          <AboutCard register />
          <AboutCard admin />
        </div>
        <div className="text-center text-slate-700">
          <h2 className="my-5 ">
            Outward remittance from Myanmar to other countries
          </h2>
          <div className="flex items-center justify-center gap-10">
            <div className="">
              <img
                className="w-52 mb-2 p-5 bg-yellow-100 rounded-lg shadow"
                src="https://www.unimoni.in/images/icons/c1.png"
                alt=""
              />
              <p>Send Money to UK</p>
            </div>
            <div className="">
              <img
                className="w-52 mb-2 p-5 bg-blue-100 rounded-lg shadow"
                src="https://www.unimoni.in/images/icons/c2.png"
                alt=""
              />
              <p>Send Money to Austrilia</p>
            </div>
            <div className="">
              <img
                className="w-52 mb-2 p-5 bg-green-100 rounded-lg shadow"
                src="https://www.unimoni.in/images/icons/c3.png"
                alt=""
              />
              <p>Send Money to Canada</p>
            </div>
            <div className="">
              <img
                className="w-52 mb-2 p-5 bg-red-100 rounded-lg shadow"
                src="https://www.unimoni.in/images/icons/c4.png"
                alt=""
              />
              <p>Send Money to USA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
