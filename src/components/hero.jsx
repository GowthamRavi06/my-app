import Image from "next/image";
import * as motion from "motion/react-client";
import { useState } from "react";
import BlurText from "../ui/blur-text";

export default function Hero() {
  const [textAnimationCompleted, settextAnimationCompleted] = useState(false);

  const handleAnimationComplete = () => {
    settextAnimationCompleted(true);
    console.log("All letters have animated!");
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 max-w-[1560px] mx-auto">
      <div className="mt-16 flex gap-5 font-mono">
        <div className="rounded-full overflow-hidden h-16 w-16 relative">
          <Image
            src="/profile-image.webp"
            className="absolute object-cover "
            alt="profile-picture"
            fill
          />
        </div>
        <BlurText
          text="Hi, I'm Gowtham  — building fast, reliable, and intuitive digital products with modern web technologies."
          delay={100}
          animateBy="words"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className=" w-[370px] mb-8"
        />
      </div>

      {/* <div className="flex gap-2">
        <SplitText
          text="Hi, I'm Gowtham"
          className=" text-white d text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />{" "}
        {textAnimationCompleted && (
          <p className="w-[270px]">
            — building fast, reliable, and intuitive digital products with
            modern web technologies.
          </p>
        )}
      </div> */}
      <div className="relative h-[250px] mt-5 w-full">
        <Image
          src="/hero-image.webp"
          className="absolute object-cover "
          alt="profile-picture"
          fill
        />
      </div>
      <h1 className="text-[60px]/[60px] sm:text-[70px]/[70px] md:text-[80px]/[80px] lg:text-[100px]/[100px]  font-inter font-semibold mt-5">
        Senior Full <br /> Stack Developer
      </h1>
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 font-mono text-[#ffffff80]  mt-14 items-center">
        <p className="whitespace-nowrap "> Bangalore, India</p>
        <div className="h-px mx-5  w-full bg-[#ffffff1a]"></div>
        <p className="">gowthamravi06@gmail.com</p>
        <div className="h-px mx-5  w-full bg-[#ffffff1a]"></div>
        <div className="flex gap-2 items-center">
          <motion.div
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              perspective: 1000,
              backfaceVisibility: "visible",
            }}
            className="text-2xl mb-1 font-medium text-[#41b78e]"
          >
            o
          </motion.div>
          <p className="text-[#41b78e] whitespace-nowrap uppercase">
            Open to Work
          </p>
        </div>
      </div>

      {/* <div className="h-[200vh] bg-gray-100 p-10">
        <div className="sticky top-20">
          <div className="flex flex-row gap-10 transition-all duration-300">
            <div className="w-64 h-40 bg-blue-500 rounded-xl"></div>
            <div className="w-64 h-40 bg-red-500 rounded-xl"></div>
            <div className="w-64 h-40 bg-green-500 rounded-xl"></div>
            <div className="w-64 h-40 bg-purple-500 rounded-xl"></div>
          </div>
        </div>
      </div> */}
      {/* <section class="h-screen overflow-x-scroll snap-x snap-mandatory flex">
        <div class="snap-center min-w-full flex justify-center items-center bg-blue-500">
          Card 1
        </div>
        <div class="snap-center min-w-full flex justify-center items-center bg-red-500">
          Card 2
        </div>
        <div class="snap-center min-w-full flex justify-center items-center bg-green-500">
          Card 3
        </div>
      </section> */}
    </section>
  );
}
