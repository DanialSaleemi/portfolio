import Slider from "react-slick";
import project from "./projects";
import Lottie from "lottie-react";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { FaFileCode } from "react-icons/fa";
import reacticon20x20 from "@/components/lotties/reacticon.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "1px",
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplayspeed: 2000,
    // useTransform: true,
    // cssEase: "linear",
    pauseOnHover: true,

  };
  return (
    
    <div className="container sm:my-24 h-screen w-full sm:mx-16 text-default">
      <Slider {...settings}>
        {project.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 sm:space-y-6 sm:px-3 sm:py-6 sm:max-w-lg sm:rounded-xl group ease-in hover:transition-transform hover:scale-105 hover:duration-700 animate-background-shine hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:bg-[length:200%_100%]"            
          >
            <Image
              src={item.thumbnail}
              alt="project thumbnail"
              width={500}
              height={500}
              priority={true}              
              // fill
              className="group-hover:hidden"
            />
            <h3 className="font-semibold text-3xl group-hover:text-center">
              {item.projectname}
            </h3>
            <p className="group-hover:text-center group-hover:px-1">
              {item.description}
            </p>
            <div className="h-12 w-12">
              <Lottie
                autoplay
                controls
                loop
                animationData={reacticon20x20}
              ></Lottie>
            </div>

            <div className="hidden group-hover:flex flex-col items-center justify-center pt-24 space-y-6">
              <a target="_blank" href={item.url} rel="noopener noreferrer">
                <GoLinkExternal size="40" />
              </a>
              <a target="_blank" href={item.source} rel="noopener noreferrer">
                <FaFileCode size="40" />
              </a>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    
  );
}