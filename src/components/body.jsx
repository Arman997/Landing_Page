import {useRef} from 'react'
import Content from './Content'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import Slider from '../pages/Slider';
import Footer from './Footer';


function Body() {

  const sectionRefs = {
    Start: useRef(null),
    '1': useRef(null),
    '2': useRef(null),
    '3': useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=''>
        
      <div className='flex justify-between px-[2%] pt-[223px] '>
            <div className='flex flex-col justify-center items-center gap-[20px] '> <span className='rotate-90 font-bold'>Follow us</span> <FaInstagram/> <FaTwitter/>  </div>
            
            <div className='w-[950px] h-[310px] flex flex-col'>
                  <div className='flex items-center'>
                    <hr className='w-[72px] border-[#FBD784]' /> <span className='mx-[32px] text-[#FBD784] text-[18px] font-bold tracking-[8px]'> A HIKING GUIDE</span>
                  </div> 
                  <span className='text-[88px] my-[32px] font-bold'>Be Prepared For The Mountains And Beyond!</span>
                  <div className='flex items-center gap-[8px]'><span className='text-[18px] font-bold'>scroll down</span> <IoIosArrowRoundDown className='text-[40px]'/> </div>
            </div>
            
            {/* slider */}
            
              <div className='px-[2%]'>         
                  <Slider scrollToSection={scrollToSection}/>
              </div> 
      </div> 

      <div className='py-[1440px] flex flex-col justify-center items-center gap-x-48'>
          <Content/>
          <div className='bottom-0 w-[1462px] h-[280px]  mt-[100px]'>
            <Footer/>
          </div>
      </div>
      
    </div>
  )
}

export default Body