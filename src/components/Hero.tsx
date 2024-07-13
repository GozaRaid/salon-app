"use client";

import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {
  return (
    <div className=" relative">
      <div className="flex xl:flex-row flex-col gap-5 z-0 max-w-[1600px] mx-auto">
        <div className="flex-1 pt-36 px-6 sm:px-16">
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
            Beauty and Elegance Redefined
          </h1>

          <p className="text-[27px] text-black-100 font-light mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            obcaecati dolore vitae et nobis a reiciendis, suscipit autem nisi
            impedit quia mollitia voluptatem error officia fugit eum accusamus
            consectetur id.
          </p>

          <div className="flex flex-row gap-3">
            <CustomButton
              // title="Get started"
              title="Get to know us"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={() => {}}
            />

            <CustomButton
              // title="Make Appointment"
              title="Get started"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={() => {}}
            />
          </div>
        </div>

        <div className="xl:flex-[1.5] flex justify-center items-center w-full xl:h-screen">
          <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 rounded-lg overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="hero"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
