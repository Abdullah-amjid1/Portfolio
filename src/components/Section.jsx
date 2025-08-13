import React from 'react';

export default function Section() {
  return (
    <>
    {/* Google Fonts should be included in the public/index.html or dynamically injected */}
    <section className="flex flex-col items-center pt-30 md:pt-40 pb-20 md:pb-40 gap-5 bg-black text-white ">
        <div>
            <p className = "text-xl md:text-5xl w-[80%]  md:w-[60%] m-auto text-center font-[red-rose] font-black ">I'm <span className=' relative before:w-full z-10 before:bg-[#39AE81] before:absolute before:h-6 before:-z-10 before:-bottom-1'>Jenny Wilson</span> a Professional Photographer from New York City.</p>
        </div>
        <div>
            <p className='w-[80%] md:w-[62%] text-center m-auto font-[red-rose] text-sm md:text-xl'>Blanditiis presentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
        </div>
        <div>
            <button className= "bg-[#39AE81] py-2 px-4 rounded-md font-[red-rose, sans-serif] font-semibold cursor-pointer">AVAILABLE FOR HIRE</button>
        </div>
    </section>
    </>
  )
}
