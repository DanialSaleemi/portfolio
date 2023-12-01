// "use client";
import Link from "next/link";
// import React, { useState } from "react";

const Navbar = () => {
  // const [expand, isExpanded] = useState(false);

  return (
    <nav className="flex items-center justify-center max-w-screen">
     <div className="sm:hidden">

      {/* <button
        className={`text-[#BBC2CC] bg-inherit font-medium rounded-full  px-6 text-8xl hover:rotate-45 hover:transition-transform hover:duration-500 delay-75 
        // 
          // expand ? "rotate-45" : "rotate-0"}
        `}
        // onClick={() => isExpanded(!expand)}
      >
        +
      </button> */}
      </div>
     
      <div className={`
      // $!expand ? "hidden sm:block" : "block"}
      `}>
        <div className="flex-col inline-flex space-y-5 font-semibold text-[#BBC2CC] px-2 text-lg md:text-xl lg:text-2xl ">
          <Link href="/" className= "rounded-sm hover:text-slate-400 hover:underline hover:transition  duration-1000">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
