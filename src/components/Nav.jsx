
import React from 'react'
import { Camera } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { FaChevronDown } from "react-icons/fa";
import { Menu } from 'lucide-react';


export default function NavBar() {
  return (
    <>
      <style>{`
        .Color {
          color: gray;
          transition: color 0.3s linear;
        }
        .Color:hover {
          color: #39AE81;
        }
      `}</style>
    <nav className="flex w-full justify-between py-6 items-center px-7 bg-black text-white fixed z-20">
        <div className="flex items-end  gap-2 text-4 font-semibold md:text-4xl ">
            <Camera color="#39AE81" size={28} />
            <p>PhotoFolio</p>
        </div>
        <div className="space-10 relative  md:gap-4  hidden md:flex">
      <a href="" className="text-zinc-400 hover:text-white font-[red-rose, sans-serif] font-base">HOME</a>
      <a href="" className="text-zinc-400 hover:text-white font-[red-rose, sans-serif] font-base">ABOUT</a>

      {/* Dropdown container */}
      <div  className="group relative">
            <button className="flex items-center gap-4 text-zinc-400 group-hover:text-white font-[red-rose, sans-serif] cursor-pointer">
            GALLERY <FaChevronDown className="group-hover:rotate-180 transition-transform " />
            </button>
            
            {/* Dropdown menu */}
            <div className="absolute left-0 top-full mt-7 w-53 bg-[#1A1A1A] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100  group-hover:visible transition-all duration-300 z-10">
            <a href="#Portraits" className="block px-4 py-2 text-zinc-400 hover:text-white rounded-t-md">Portraits</a>
            <a href="#Landscapes" className="block px-4 py-2 text-zinc-400 hover:text-white">Landscapes</a>
            <a href="#Events" className="block px-4 py-2 text-zinc-400 hover:text-white">Events</a>
            <a href="#Commercial" className="block px-4 py-2 text-zinc-400 hover:text-white rounded-b-md">Commercial</a>
            </div>
      </div>

      <a href="" className="text-zinc-400 hover:text-white font-[red-rose, sans-serif] ">SERVICES</a>
      <a href="" className="text-zinc-400 hover:text-white font-[red-rose, sans-serif]">CONTACT</a>
    </div>
        <div  className= "flex gap-2">
            <div className='flex gap-2'>
              <a href=""><Instagram className='Color'  size={19} /></a>
              <a href=""><Linkedin className='Color'  size={19} /></a>
              <a href=""><Facebook className='Color' size={19} /></a>
              <a href=""><Twitter className='Color' size={19} /></a>
            </div>
            <button className='md:hidden'><Menu className='Color' size={23} /></button>
        </div>
      
    </nav>
    
      </>
  )
}
