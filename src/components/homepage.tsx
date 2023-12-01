import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen space-y-4 -my-40 justify-center items-center">
        <div
          className=" rounded-full bg-cover sm:p-16 sm:mx-8 border-2 border-t-4 border-r-4 sm:border-t-8 sm:border-r-8 border-t-amber-300 border-r-amber-300  w-[80px] h-[80px] sm:w-[250px] sm:h-[250px] bg-top"
          style={{ backgroundImage: 'url("/d1.png")' } }
        ></div>
        <div className="font-extrabold text-xl w-screen sm:text-3xl md:text-6xl [text-wrap:balance] text-center bg-clip-text text-transparent bg-[#33be58]">
          Hi, I am{" "}
          <span className="text-[#BBC2CC] inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-4 text-left leading-tight tracking-wider sm:tracking-wider [&_li]:block">
              <li>Danial Saleemi</li>
              <li>FullStack Developer</li>
              <li>UI/UX Designer</li>
              <li>AI Enthusiast</li>
              <li aria-hidden="true">Danial Saleemi</li>
            </ul>
          </span>
        </div>
        <p className="text-[#BCC6CC] sm:w-1/2 text-center px-4 text-base font-light sm:font-normal md:text-2xl tracking-tight sm:tracking-wider leading-loose">
          Specialized in optimizing e-commerce landscapes: from SEO mastery and
          streamlined content updates to engineering lightning-fast websites.
        </p>
      </div>
    </>
  );
};

export default HomePage;
