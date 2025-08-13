import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [slide, setSlide] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Line animation duration: 1s
    const lineTimer = setTimeout(() => setSlide(true), 1000);
    // Slide animation duration: 0.5s
    const hideTimer = setTimeout(() => setHide(true), 1500);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <>
      <style>
        {`
          .loader-line {
            animation: loaderLine 1s cubic-bezier(0.4,0,0.2,1) forwards;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 2px;
            background: white;
            z-index: 10;
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          @keyframes loaderLine {
            0%   { height: 0%; top: 50%; opacity: 0; }
            20%  { opacity: 1; }
            100% { height: 100%; top: 5%; opacity: 0; }
          }
          .left-slide {
            transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
          }
          .left-slide.slide {
            transform: translateX(-100%);
          }
          .right-slide {
            transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
          }
          .right-slide.slide {
            transform: translateX(100%);
          }
        `}
      </style>

      <section className="flex overflow-hidden w-full h-screen top-0 bg-transparent z-30 fixed gap-0">
        <div className={`w-[50%] bg-black left-slide${slide ? ' slide' : ''}`}></div>
        <div className={`w-[50%] bg-black right-slide${slide ? ' slide' : ''}`}></div>
        {!slide && (
          <div className="w-[2px] h-[6%] bg-white absolute z-10 translate-x-[-50%] left-1/2 translate-y-[50%] top-1/2 loader-line"></div>
        )}
      </section>
    </>
  );
}