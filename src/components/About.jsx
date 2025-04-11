import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="mb-5 max-w-64 font-robert-regular text-align:center">
          Hello,
          <br />
          My Name is
        </p>

        <AnimatedTitle
          title="HIT<b>E</b>N <br /> LAMB<b>A</b>"
          containerClass="mt-5 !text-black text-center"
        />

        <p className="font-robert-regular text-center text-xs sm:text-sm md:text-base text-gray-700 max-w-lg">
          Data Engineer | Analyst | Full-Stack Developer
          <br /> Building scalable solutions, and optimizing business processes
          with AI and cloud technologies.
        </p>

        <div className="text-center text-xs sm:text-sm md:text-base text-gray-500">
          <p></p>
          <p className="text-gray-700">
            MS Data Science | MS Computer Science | BS Computer Science
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/1.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
