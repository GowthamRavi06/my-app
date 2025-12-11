import Image from "next/image";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Hero() {
  const [done, setDone] = useState(false);

  return (
    <section className="px-20 py-10 max-w-[1560px] mx-auto">
      <div className="mt-16 flex gap-5">
        <div className="rounded-full overflow-hidden h-16 w-16 relative">
          <Image
            src="/profile-image.jpeg"
            fill
            alt="profile"
            className="object-cover"
          />
        </div>

        <BlurText
          text="Hi, I'm Gowtham — building fast, reliable, and intuitive digital products."
          delay={100}
          animateBy="words"
          direction="bottom"
          className="w-[270px] mb-8"
          onAnimationComplete={() => setDone(true)}
        />
      </div>

      <div className="relative h-[250px] mt-5 w-full">
        <Image src="/hero-image.png" fill alt="hero" className="object-cover" />
      </div>

      <h1 className="text-[100px]/[90px] font-semibold mt-5">
        Senior Full <br /> Stack Developer
      </h1>

      <div className="flex gap-5 text-[#ffffff80] mt-14 items-center">
        <p className="whitespace-nowrap">Bangalore, India</p>
        <div className="h-px mx-5 w-full bg-[#ffffff1a]" />
        <p>gowthamravi06@gmail.com</p>
        <div className="h-px mx-5 w-full bg-[#ffffff1a]" />

        <div className="flex gap-2 items-center">
          <motion.div
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl mb-1 font-medium text-[#41b78e]"
          >
            o
          </motion.div>
          <p className="text-[#41b78e] whitespace-nowrap uppercase">
            Open to Work
          </p>
        </div>
      </div>
    </section>
  );
}
