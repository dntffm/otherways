'use client';

import { AnimationPlaybackControls, animate, useScroll, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";


function Scracth() {
  const ctl = useAnimationControls()
  
  const scratches = [
    "/img/yellow-scr.png",
    "/img/red-scr.png",
    "/img/black-scr.png",
  ]
  
  const [currentScratch, setCurrentScratch] = useState(0)

  useEffect(() => {
    console.log(currentScratch);
    
    const intervalId = setInterval(() => {
        let next = 0;
        if(currentScratch === 0) next = 1
        if(currentScratch === 1) next = 2
        if(currentScratch === 2) next = 0

        setCurrentScratch(next);
    }, 1000)
  
    return () => clearInterval(intervalId);
  }, [])

  return <motion.img
      animate={{
        rotate: [0, 0, 180, 180, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 0.5
      }}
      className="absolute top-0 left-0"
      src={scratches[currentScratch]}
      alt="Scracth" />
}

export default function Home() {
  const animControls = useRef<AnimationPlaybackControls>();

  useScroll().scrollYProgress.on("change", (yProgress) => {
    if (!animControls.current) return;

    animControls.current.time = yProgress * animControls.current.duration;
  });

  useEffect(() => {
    animControls.current = animate([
      [".vo", { opacity: 0 }, { ease: "easeIn", duration: 0.1 }],
      [".ov", { opacity: 0 }, { ease: "easeOut", duration: 0.8 }],
      [".vo", { opacity: 1 }, { ease: "easeIn", duration: 1.0 }],
    ]);
    animControls.current.pause();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="h-screen w-screen flex flex-col">
        <div className="ov m-auto">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">
              Otherway
              <span className="relative">
                (s)
                <Scracth/>
              </span>
            </h1>
            <div className="w-16 border-4 border-black mt-3"></div>
          </div>
        </div>
        <div className="vo flex flex-col sm:w-1/2 p-12 opacity-0">
          <div className="flex flex-col items-start">
            <h1 className="text-xl sm:text-3xl font-bold tracking-wide">
              Otherway
              <span className="relative">
                (s)
                <Scracth/>
              </span>
            </h1>
            <div className="w-16 border-4 border-black mt-3"></div>
          </div>
          <p className="text-sm text-[#2D304E] mt-4 text-balance">At Otherway(s) we embody a philosophy that challenges conventional thinking and explores alternative avenues to solving yesterday's and today's problems. Our ethos is founded on the belief that innovation flourishes outside the boundaries of the <span className="font-bold border-b border-red-400">ordinary</span>. </p>
        </div>
      </section>
    </main>
  );
}
