import * as motion from "motion/react-client";
import { useState } from "react";

export default function Nav({ scrollYProgress }) {
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <div>
      <nav className="gap-4 md:gap-10 font-sans z-9999 h-[60px] max-w-[1560px] left-2/4 -translate-x-2/4 px-6 md:px-12  lg:px-20 w-full fixed top-0 text-white font-medium text-[17px] flex justify-center items-center ">
        <h1 className="whitespace-nowrap text-lg"> Gowtham Ravi</h1>
        <div className="relative w-full mx-4">
          <div className="h-px  absolute z-0  w-full bg-[#ffffff1a]"></div>
          <motion.div
            className="h-px left-0  absolute z-0  w-full bg-[#ffffff80]"
            style={{
              scaleX: scrollYProgress,
              originX: 0,
            }}
          />
        </div>
        <p
          onClick={() => handleScroll("work")}
          className="hidden md:block cursor-pointer"
        >
          Work
        </p>
        <p
          onClick={() => handleScroll("projects")}
          className="hidden md:block cursor-pointer"
        >
          Projects
        </p>
        <p
          onClick={() => handleScroll("contact")}
          className="hidden md:block cursor-pointer"
        >
          Contact
        </p>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="space-y-1.5 cursor-pointer md:hidden"
        >
          <div
            className={`${
              open ? " rotate-45 " : ""
            } h-0.5 duration-300 w-7 bg-white rounded-full`}
          ></div>
          <div
            className={`${
              open ? "hidden" : "block"
            } h-0.5 w-7 bg-white rounded-full`}
          ></div>
          <div
            className={`${
              open ? "-translate-y-2 -rotate-45" : ""
            } h-0.5 w-7 duration-300 bg-white rounded-full`}
          ></div>
        </div>
      </nav>
      <div
        className={`fixed ${
          open ? "bottom-0" : "-bottom-[250px]"
        }  bg-[#171717] px-5 py-10 z-100 w-full duration-300 h-[250px]   left-0 space-y-4 `}
      >
        <p onClick={() => handleScroll("work")} className="cursor-pointer">
          Work
        </p>
        <p onClick={() => handleScroll("projects")} className="cursor-pointer">
          Projects
        </p>
        <p onClick={() => handleScroll("contact")} className="cursor-pointer">
          Contact
        </p>
      </div>
    </div>
  );
}
