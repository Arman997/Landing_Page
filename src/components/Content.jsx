// import React from 'react'
import { GrLinkNext } from "react-icons/gr";

function Content() {
  return (
    
    <>
        <div className="flex flex-col justify-center gap-x-48">
            
            {/* 1 */}
            
            <div className="flex items-center justify-between w-[1462px] h-[720px]" >
                <div className="h-[439px] w-[632px] flex flex-col gap-[27px]">
                    <div className='flex items-center'><hr className='w-[72px] border-[#FBD784]' /> <span className="mx-[32px] font-bold text-[18px] uppercase text-[#FBD784]">Get started</span></div>
                    <span className="text-[64px]">What level of hiker are you?</span>
                    <p className="font-bold text-[18px]">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                    <div className="flex items-center gap-3 cursor-pointer"><span className="font-bold text-[18px] text-[#FBD784]">read more</span><GrLinkNext className="text-[#FBD784] text-[24px]"/></div>   
                </div>
                <div className="w-[566px] h-[720px]">
                    <img className="w-full h-auto" src="/01.png" alt="01.png" />
                </div>
            </div>

            {/* 2  */}
            
            <div className="flex items-center justify-between w-[1462px] h-[720px]" >   
                <div className="w-[566px] h-[720px] ">
                    <img className="w-full h-auto" src="/02.png" alt="02.png" />
                </div>

                <div className="h-[439px] w-[632px] flex flex-col gap-[27px]">
                    <div className='flex items-center'><hr className='w-[72px] border-[#FBD784]' /> <span className="mx-[32px] font-bold text-[18px] uppercase text-[#FBD784]">Hiking Essentials</span></div>
                    <span className="text-[64px]">Picking the right Hiking Gear!</span>
                    <p className="font-bold text-[18px]">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
                    <div className="flex items-center gap-3 cursor-pointer"><span className="font-bold text-[18px] text-[#FBD784]">read more</span><GrLinkNext className="text-[#FBD784] text-[24px]"/></div>   
                </div>
            </div>

            {/* 3 */}
            
            <div className="flex items-center justify-between w-[1462px] h-[720px]" >

               <div className="h-[439px] w-[632px] flex flex-col gap-[27px]">
                   <div className='flex items-center'><hr className='w-[72px] border-[#FBD784]' /> <span className="mx-[32px] font-bold text-[18px] uppercase text-[#FBD784]">where you go is the key</span></div>
                   <span className="text-[64px]">Understand Your Map & Timing</span>
                   <p className="font-bold text-[18px]">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                   <div className="flex items-center gap-3 cursor-pointer"><span className="font-bold text-[18px] text-[#FBD784]">read more</span><GrLinkNext className="text-[#FBD784] text-[24px]"/></div>   
               </div>

               <div className="w-[566px] h-[720px]">
                   <img className="w-full h-auto" src="/03.png" alt="03.png" />
               </div>
           </div>

        </div>
    </>
  
    )
} 

export default Content