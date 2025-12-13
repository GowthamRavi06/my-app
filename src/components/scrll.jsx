import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export const skillsData = [
  {
    id: "product-design",
    title: "Product Design",
    description:
      "Skilled in 0–1 product design, from user research, UX flows, high-fidelity UI to design systems.",
    tools: ["Figma", "Notion"],
    bg: "rgb(23, 23, 23)",
  },
  {
    id: "ux-research",
    order: "02",
    title: "UX Research & Strategy",
    description:
      "User interviews, research, and journey mapping to guide every design decision.",
    tools: ["ChatGPT", "Notion"],
    bg: "rgb(28, 28, 28)",
  },
  {
    id: "interaction-design",
    order: "03",
    title: "Interaction Design",
    description:
      "Micro-interactions, motion, and prototypes that make products feel alive.",
    tools: ["Framer", "Figma"],
    bg: "rgb(35, 35, 35)",
  },
  {
    id: "gen-ai",
    order: "04",
    title: "Gen AI",
    description:
      "Using AI for concepting, visual/creative direction, and rapid iteration to push ideas faster.",
    tools: ["Midjourney", "VEO 3"],
    bg: "rgb(40, 40, 40)",
  },
  {
    id: "branding",
    order: "05",
    title: "Branding",
    description:
      "Shaping brand narratives, visual language, and cross-platform consistency so the product feels like a solid experience.",
    tools: ["Figma", "Photoshop"],
    bg: "rgb(46, 46, 46)",
  },
];

const HorizontalScrollSection = ({ scrollContainer }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = scrollContainer?.current;

    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      // Visible height of the scroll container
      const viewportHeight = container.clientHeight;

      // Scroll position inside container
      const scrollTop = container.scrollTop;

      // Section position relative to container
      const sectionTop = section.offsetTop - container.offsetTop;

      // How far we've scrolled into the section
      const distance = scrollTop - sectionTop;
      const maxDistance = section.offsetHeight - viewportHeight;

      let percentage = distance / maxDistance;
      percentage = Math.max(0, Math.min(1, percentage));

      // Horizontal movement limit
      const maxTranslate = track.scrollWidth - container.clientWidth;

      track.style.transform = `translateX(-${percentage * maxTranslate}px)`;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollContainer]);

  return (
    <div ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden  flex flex-col justify-center">
        <div className="flex items-center gap-10 px-20 ">
          <h2 className="text-[58px] font-semibold whitespace-nowrap">
            Skills and Tools
          </h2>
          <div className="h-px  mx-4   w-full bg-[#ffffff1a]"></div>
        </div>
        <div
          ref={trackRef}
          className="flex   w-max px-20  items-center   will-change-transform"
        >
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              style={{ background: skill?.bg }}
              className="space-y-3 relative h-[440px] w-[540px] p-12"
            >
              <div className="flex  items-start justify-between">
                <div className="flex gap-3">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 rounded-full bg-[#ffffff1a] text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className=" opacity-50 text-[100px]">{skill.order}</div>
              </div>

              <div className="absolute bottom-12">
                <h3 className="text-[28px] font-bold">{skill.title}</h3>
                <p className="text-slate-400 text-[16px] max-w-[350px]">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
          <div className="grid  grid-cols-12 gap-2 pl-2 ">
            {Array.from({ length: 528 }).map((_, i) => (
              <span key={i} className="h-0.5 w-0.5 rounded-full bg-slate-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
