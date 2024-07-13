import Image from "next/image";
import { useState } from "react";

interface Services {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Services[] = [
  {
    title: "Haircuts",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://images.unsplash.com/photo-1606333259737-6da197890fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Haircuts",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://images.unsplash.com/photo-1606333259737-6da197890fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Haircuts",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl:
      "https://images.unsplash.com/photo-1606333259737-6da197890fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Service = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-center block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
        Our Best Services
      </h2>
      {/* <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
        Read about our latest achievements and milestones.
      </p> */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md min-h-[30rem] items-end overflow-hidden group"
          >
            <img
              src={item.imageUrl}
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-300"></div>
            <div className="p-6 text-center relative flex flex-col justify-end h-full w-full group-hover:justify-center transition-all duration-300">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white group-hover:mb-4 transition-all duration-300">
                {item.title}
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
