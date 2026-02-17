import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const slides = [
  {
    image: "/amit/f1.jpeg",
    title: "Empowering Future Leaders",
    text: "Through knowledge, innovation, and lifelong learning",
  },
  {
    image: "/amit/f2.jpeg",
    title: "Inspiring Academic Excellence",
    text: "Building strong foundations for successful careers",
  },
  {
    image: "/amit/f3.jpeg",
    title: "Learning Beyond Classrooms",
    text: "Practical experiences that shape real-world skills",
  },
  {
    image: "/amit/f4.jpeg",
    title: "Innovate. Create. Achieve.",
    text: "Where curiosity meets opportunity",
  },
  {
    image: "/amit/f5.jpeg",
    title: "Technology-Driven Education",
    text: "Preparing students for the digital future",
  },
  {
    image: "/amit/f6.jpeg",
    title: "Supportive Learning Community",
    text: "Guiding every student toward success",
  },
  {
    image: "/amit/f7.jpeg",
    title: "Research & Development",
    text: "Turning ideas into impactful solutions",
  },
  {
    image: "/amit/f8.jpeg",
    title: "Global Perspective",
    text: "Connecting education with the world",
  },
  {
    image: "/amit/f10.jpeg",
    title: "Shape Your Future Today",
    text: "Start your journey toward excellence",
  },
];

export default function HeroArcadis() {
  const sliderRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);

  const DURATION = 6000;
  const INTERVAL = 50;

  /* ===== Auto Slide Progress ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const percent = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        sliderRef.current?.slickNext();
        startTimeRef.current = Date.now();
        setProgress(0);
      }
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const resetProgress = () => {
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    beforeChange: (_, next) => {
      setCurrent(next);
      resetProgress();
    },
  };

  return (
  <section className="relative h-screen overflow-hidden bg-black rounded-[25px] mt-5">

    <Slider ref={sliderRef} {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="
              relative h-screen 
              bg-contain bg-center bg-no-repeat
              flex items-end justify-center
              md:items-center md:justify-start
            "
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r 
                            from-black/80 via-black/40 to-black/20" />

            {/* ================= CONTENT ================= */}
            <div
              className="
                relative z-10 w-full max-w-7xl
                px-6 sm:px-10 md:px-16
                pb-16 md:pb-0
                text-center md:text-left
                text-white
              "
            >
              <h1
                className="
                  text-[26px] sm:text-[38px] md:text-[56px] lg:text-[68px]
                  font-semibold leading-tight tracking-tight
                  max-w-4xl mx-auto md:mx-0 mb-4 md:mb-6
                "
              >
                {slide.title}
              </h1>

              <p
                className="
                  text-sm sm:text-base md:text-xl lg:text-2xl
                  font-normal leading-relaxed text-white/90
                  max-w-xl mx-auto md:mx-0 mb-6 md:mb-10
                "
              >
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>

    {/* ================= MOBILE ARROWS ================= */}
    <div className="md:hidden absolute inset-y-0 left-0 right-0 z-30 pointer-events-none">
      <button
        onClick={() => {
          sliderRef.current?.slickPrev();
          resetProgress();
        }}
        className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full bg-white/90 flex items-center justify-center"
      >
        <ArrowLeftIcon className="w-5 h-5 text-arcadisOrange" />
      </button>

      <button
        onClick={() => {
          sliderRef.current?.slickNext();
          resetProgress();
        }}
        className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full bg-white/90 flex items-center justify-center"
      >
        <ArrowRightIcon className="w-5 h-5 text-arcadisOrange" />
      </button>
    </div>

    {/* ================= DESKTOP ARROWS ================= */}
    <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-30 items-center gap-6">
      <button
        onClick={() => {
          sliderRef.current?.slickPrev();
          resetProgress();
        }}
        className="w-12 h-12 rounded-full bg-white/90 hover:bg-white transition flex items-center justify-center"
      >
        <ArrowLeftIcon className="w-5 h-5 text-arcadisOrange" />
      </button>

      <span className="text-sm tracking-widest text-white min-w-[80px] text-center">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </span>

      <button
        onClick={() => {
          sliderRef.current?.slickNext();
          resetProgress();
        }}
        className="w-12 h-12 rounded-full bg-white/90 hover:bg-white transition flex items-center justify-center"
      >
        <ArrowRightIcon className="w-5 h-5 text-arcadisOrange" />
      </button>
    </div>

    {/* ================= PROGRESS BAR ================= */}
    <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-20">
      <div className="h-[3px] bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-arcadisOrange transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

  </section>
);
}
