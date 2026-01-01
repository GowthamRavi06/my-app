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
import Footer from "../components/footer";
import SplashCursor from "../ui/splach";
import About from "../components/about";
import ScrollReveal from "../ui/scroll-reveal";
import AnimatedContent from "../ui/animate-content";
import CircularGallery from "../ui/circular-gallery";

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
          <About />

          <ProjectCard />
          <HorizontalScrollSection scrollContainer={scrollRef} />
          <Footer />
          {/* <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}
