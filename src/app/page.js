"use client";
import Hero from "../components/hero";
import Nav from "../components/nav";
import ProjectCard from "../components/projects";
import HorizontalScroll from "../components/skills";
import HorizontalScrollSection from "../components/scrll";
import TechCard from "../components/techcard";
import GradualBlurMemo from "../ui/gradual-blur";
import { useRef } from "react";
import { useScroll, useSpring } from "motion/react";

export default function page() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <div className="">
      <Nav scrollYProgress={scrollYProgress} />

      <section
        style={{
          position: "relative",
          height: "100dvh",
          overflow: "hidden",
        }}
      >
        <div
          ref={scrollRef}
          style={{
            height: "100%",
            overflowY: "auto",
            // padding: "0 2rem 6rem 2rem",
          }}
          className="no-scrollbar"
        >
          <GradualBlurMemo
            target="parent"
            position="top"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
          <Hero />
          <ProjectCard />
          <HorizontalScrollSection scrollContainer={scrollRef} />
          <section className="px-20">
            <p className=" text-[110px] font-bold mb-32">
              <span className="text-[#ffffff80]">Let's</span> Connect
            </p>
            <p className="text-[34px] text-[#ffffff80] mb-10">
              Let's build something cool together!
            </p>
            <div className="grid grid-cols-3 w-full mt-3 mb-20">
              <div
                style={{ background: "rgb(31, 31, 31)" }}
                className="h-[108px] text-2xl flex justify-center items-center "
              >
                Connect on LinkedIn
              </div>

              <div
                style={{ background: "rgb(46, 46, 46)" }}
                className="h-[108px] text-2xl flex justify-center items-center "
              >
                Send an Email
              </div>
              <div
                style={{ background: "rgb(84, 84, 84)" }}
                className="h-[108px] text-2xl flex justify-center items-center"
              >
                Whats app me
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
