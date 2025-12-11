"use client";
``;
import Image from "next/image";
import SplitText from "../ui/spli-text";
import { useRef, useState } from "react";
import BlurText from "../ui/blur-text";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import GradualBlurMemo from "../ui/gradual-blur";
export default function page() {
  const [textAnimationCompleted, settextAnimationCompleted] = useState(false);
  const handleAnimationComplete = () => {
    settextAnimationCompleted(true);
    console.log("All letters have animated!");
  };

  const handleBlurAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <div className="">
      <nav className="gap-10 z-9999 h-[60px] max-w-[1560px] left-2/4 -translate-x-2/4 px-20 w-full fixed top-0 text-white font-medium text-[17px] flex justify-center items-center ">
        <h1 className="whitespace-nowrap text-lg"> Gowtham Ravi</h1>
        <div className="h-px mx-5  w-full bg-[#ffffff1a]"></div>
        <p>Work</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
      <section
        style={{ position: "relative", height: "100dvh", overflow: "hidden" }}
      >
        <div
          style={{
            height: "100%",
            overflowY: "auto",
            // padding: "0 2rem 6rem 2rem",
          }}
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
          <section className="px-20 py-10 max-w-[1560px] mx-auto">
            <div className="mt-16 flex gap-5">
              <div className="rounded-full overflow-hidden h-16 w-16 relative">
                <Image
                  src="/profile-image.jpeg"
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
                className=" w-[270px] mb-8"
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
                src="/hero-image.png"
                className="absolute object-cover "
                alt="profile-picture"
                fill
              />
            </div>
            <h1 className="text-[100px]/[90px] font-semibold mt-5">
              Senior Full <br /> Stack Developer
            </h1>
            <div className="flex gap-5 text-[#ffffff80]  mt-14 items-center">
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
          <section className="">
            <div className="h-[380px] w-full sticky top-24 bg-[#171717]">
              <div className="px-20 flex gap-10 py-20 max-w-[1560px] mx-auto">
                <div className="grow">
                  <h2 className="text-[38px]/[44px] font-semibold">
                    Service worker & browser indexDB
                  </h2>
                  <div className="flex uppercase mt-2 text-sm text-[#ffffff40] items-center gap-3">
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Next js
                    </div>
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Nest js
                    </div>
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Postgres
                    </div>
                    <div className="h-px mx-5  w-full bg-[#ffffff1a]"></div>
                  </div>
                </div>
                <div>
                  <div className=" overflow-hidden h-[250px] w-[300px] relative">
                    <Image
                      src="/profile-image.jpeg"
                      className="absolute object-cover "
                      alt="profile-picture"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[380px] w-full sticky top-24 bg-[#363636]">
              <div className="px-20 flex gap-10 py-20 max-w-[1560px] mx-auto">
                <div className="grow">
                  <h2 className="text-[38px]/[44px] font-semibold">
                    Service worker & browser indexDB
                  </h2>
                  <div className="flex uppercase mt-2 text-sm text-[#ffffff40] items-center gap-3">
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Next js
                    </div>
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Nest js
                    </div>
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Postgres
                    </div>
                    <div className="h-px mx-5  w-full bg-[#ffffff1a]"></div>
                  </div>
                </div>
                <div>
                  <div className=" overflow-hidden h-[250px] w-[300px] relative">
                    <Image
                      src="/profile-image.jpeg"
                      className="absolute object-cover "
                      alt="profile-picture"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[380px] w-full sticky top-24 bg-[#171717]">
              <div className="px-20 flex gap-10 py-20 max-w-[1560px] mx-auto">
                <div className="grow">
                  <h2 className="text-[38px]/[44px] font-semibold">
                    Service worker & browser indexDB
                  </h2>
                  <div className="flex uppercase mt-2 text-sm text-[#ffffff40] items-center gap-3">
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Next js
                    </div>
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Nest js
                    </div>
                    <div className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1">
                      Postgres
                    </div>
                    <div className="h-px mx-5  w-full bg-[#ffffff1a]"></div>
                  </div>
                </div>
                <div>
                  <div className=" overflow-hidden h-[250px] w-[300px] relative">
                    <Image
                      src="/profile-image.jpeg"
                      className="absolute object-cover "
                      alt="profile-picture"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={ref} className="relative h-[300vh] bg-gray-50">
            <motion.div
              style={{ x }}
              className="sticky top-20 flex gap-10 w-max px-10"
            >
              <div className="w-64 h-40 bg-blue-500 rounded-xl"></div>
              <div className="w-64 h-40 bg-red-500 rounded-xl"></div>
              <div className="w-64 h-40 bg-green-500 rounded-xl"></div>
              <div className="w-64 h-40 bg-purple-500 rounded-xl"></div>
              <div className="w-64 h-40 bg-yellow-500 rounded-xl"></div>
            </motion.div>
          </section>
          <div className="h-dvh w-full"></div>
        </div>
      </section>
    </div>
  );
}
