import { useRef } from "react";
import SplashCursor from "../ui/splach";
import Image from "next/image";
import ScrollReveal from "../ui/scroll-reveal";
import AnimatedContent from "../ui/animate-content";

export default function About() {
  const sectionRef = useRef(null);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative gap-20 px-6 my-10 sm:my-20 xl:flex-row flex flex-col xl:gap-6 justify-between items-center md:px-12 lg:px-20 "
      >
        <div className="order-2 xl:order-1">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#ffffff90]">
            I’m Gowtham Ravi, a Full Stack Developer
          </h2>

          <p className="  max-w-[560px] text-lg sm:text-xl text-[#ffffff70]">
            <span className="text-2xl sm:text-3xl"> w</span>ho enjoys turning
            complex ideas into simple, reliable software. <br /> <br /> I love
            working across the stack—building clean, intuitive interfaces with
            Next.js and designing backend systems with NestJS and PostgreSQL.{" "}
            <br /> <br /> I care deeply about code quality, performance, and
            creating experiences that feel smooth and thoughtful. Curious by
            nature, always learning, and driven by the joy of building things
            that people genuinely enjoy using.
          </p>
        </div>
        <div className="relative order-1 xl:order-2 top-0 mt-5 xl:sticky xl:top-20  flex ">
          <p className="text-[70px]/[70px] sm:text-[100px]/[100px]  font-bold font-space relative z-10">
            Gowtham <br /> &nbsp;&nbsp; Ravi
          </p>
          <div className="absolute sm:hidden  top-12 -left-20">
            <Image
              src="/image.png"
              height={210}
              width={210}
              alt="profile-picture"
            />
          </div>
          <div className="rotate-45 sm:hidden  ml-[-100px]">
            <Image
              src="/lap.png"
              height={140}
              width={140}
              alt="profile-picture"
            />
          </div>
          <div className="absolute hidden sm:block  top-12 -left-20">
            <Image
              src="/image.png"
              height={300}
              width={300}
              alt="profile-picture"
            />
          </div>
          <div className="rotate-45 hidden sm:block ml-[-100px]">
            <Image
              src="/lap.png"
              height={200}
              width={200}
              alt="profile-picture"
            />
          </div>
        </div>

        {/* <SplashCursor containerRef={sectionRef} /> */}
      </section>
    </>
  );
}
