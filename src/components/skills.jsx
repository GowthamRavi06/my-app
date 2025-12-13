"use client";
import { useEffect, useRef, useState } from "react";

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !wrapper) return;

    const update = () => {
      const scrollWidth = wrapper.scrollWidth;
      const winW = window.innerWidth;
      const winH = window.innerHeight;

      const scrollDistance = scrollWidth - winW;

      // Section height = scroll distance + viewport height
      setHeight(scrollDistance + winH);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const start = Math.min(0, rect.top); // when section reaches top
      const progress = Math.abs(start) / (height - window.innerHeight);

      const scrollWidth = wrapper.scrollWidth - window.innerWidth;
      const x = -(scrollWidth * progress);

      wrapper.style.transform = `translateX(${x}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [height]);

  return (
    <section
      ref={sectionRef}
      style={{ height }}
      className="relative w-full bg-white"
    >
      {/* Sticky scene */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Horizontal content */}
        <div
          ref={wrapperRef}
          className="flex items-center gap-20 px-20 w-max will-change-transform"
        >
          <div className="min-w-[70vw]">
            <img
              className="w-[600px] rounded-xl"
              src="https://www.apple.com/v/ipad-pro/t/images/overview/hero__b2q87exx6cfm_medium_2x.jpg"
            />
          </div>

          <div className="min-w-[70vw] text-4xl font-bold">
            Content Testing 1
          </div>

          {/* Trigger example */}
          <div className="min-w-[70vw] relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-red-500"></div>
            <div className="flex gap-10">
              <img
                className="w-[500px]"
                src="https://www.apple.com/v/ipad-pro/t/images/overview/hero__b2q87exx6cfm_medium_2x.jpg"
              />
              <h2 className="text-4xl font-bold">Animated Section Title</h2>
            </div>
          </div>

          <div className="min-w-[70vw] text-4xl font-bold">
            Content Testing 2
          </div>

          <div className="min-w-[70vw]">
            <img
              className="w-[600px]"
              src="https://www.apple.com/v/ipad-pro/t/images/overview/hero__b2q87exx6cfm_medium_2x.jpg"
            />
          </div>

          <div className="min-w-[70vw] text-4xl font-bold">
            Content Testing 3
          </div>

          <div className="min-w-[70vw] flex gap-10">
            <img
              className="w-[500px]"
              src="https://www.apple.com/v/ipad-pro/t/images/overview/hero__b2q87exx6cfm_medium_2x.jpg"
            />
            <h2 className="text-4xl font-bold">Content Testing 4</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
