import React from 'react'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <>
          <style>{`
        .Child {
          color: gray;
        }
        .Parent:hover .Child
        {
          color: #39AE81;
        }
        }
      `}</style>
    <section className='w-full py-9 flex flex-col gap-2 bg-[#0D0D0D] border-t border-t-zinc-500'>
        <div className='w-full text-center '>
            <p className='text-white'>© 2023 by Jenny Wilson. Proudly created with React</p>
        </div>
        <div className='flex w-full items-center justify-center gap-2'>
            <div className='Parent cursor-pointer hover:border-[#39AE81] border border-zinc-500 flex px-2 py-2 rounded-full'>
                <a href="" ><Instagram className='Child' size={19}/></a>
            </div>
            <div className='Parent cursor-pointer hover:border-[#39AE81] border border-zinc-500 flex px-2 py-2 rounded-full'>
                <a href=""><Linkedin className='Child' size={19}/></a>
            </div>
            <div className='Parent cursor-pointer hover:border-[#39AE81] border border-zinc-500 flex px-2 py-2 rounded-full'>
                <a href=""><Facebook className='Child' size={19}/></a>
            </div>
            <div className='Parent cursor-pointer hover:border-[#39AE81] border border-zinc-500 flex px-2 py-2 rounded-full'>
                <a href=""><Twitter className='Child' size={19}/></a>
            </div>
        </div>
        <div className='flex gap-2 w-full justify-center'>
            <p className='font-semibold text-white'>Designed by</p><p className='text-[#39AE81] '>Abdullah Amjid</p>
        </div>
    </section>
    </>
  )
}
