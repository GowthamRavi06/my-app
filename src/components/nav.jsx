import * as motion from "motion/react-client";

export default function Nav({ scrollYProgress }) {
  return (
    <nav className="gap-10 z-9999 h-[60px] max-w-[1560px] left-2/4 -translate-x-2/4 px-20 w-full fixed top-0 text-white font-medium text-[17px] flex justify-center items-center ">
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

      <p>Work</p>
      <p>About</p>
      <p>Contact</p>
    </nav>
  );
}
