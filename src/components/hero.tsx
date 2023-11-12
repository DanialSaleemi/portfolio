import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen space-y-4  justify-center items-center">
        <div
          className=" rounded-full bg-cover sm:p-16 sm:mx-8 border-4 border-[#8659ceef] w-[80px] h-[80px] sm:w-[130px] sm:h-[130px]"
          style={{ backgroundImage: 'url("/avm.png")' }}
        ></div>
        <div className="font-extrabold text-xl w-screen sm:text-3xl md:text-6xl [text-wrap:balance] text-center bg-clip-text text-transparent bg-[#33be58]">
          Hi, I am{" "}
          <span className="text-white inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-4 text-left leading-tight tracking-wider sm:tracking-wider [&_li]:block">
              <li>Danial Saleemi</li>
              <li>FullStack Developer</li>
              <li>UI/UX Designer</li>
              <li>AI Enthusiast</li>
              <li aria-hidden="true">Danial Saleemi</li>
            </ul>
          </span>
        </div>
        <p className="text-emerald-200 text-left px-4 text-base font-light sm:font-normal md:text-2xl tracking-tight sm:tracking-normal leading-7">
          Specialized in optimizing e-commerce landscapes: from SEO mastery and
          streamlined content updates to engineering lightning-fast websites.
        </p>
      </div>
    </>
  );
};

export default HomePage;
