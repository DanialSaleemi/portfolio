"use client";
import React from "react";
import { project } from "./projects";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { FaFileCode } from "react-icons/fa";
import Lottie from "lottie-react";
import reacticon from "@/components/lotties/reacticon.json";
import reacticon20x20 from "@/components/lotties/reacticon.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "@/components/carousel";

const Work = () => {
  return (
    <>
      <div>
        <SimpleSlider />
      </div>
      
    </>
  );
};
export default Work;
