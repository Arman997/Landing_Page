import React from 'react'
import Content from './Content'


function Body() {
  return (
    <div className=''>
        
      <div className='flex justify-between px-[2%]'>
            <div className=''> div1 </div>
            <div className='w-[950px] h-[310px] flex flex-col'>
                  <div className='flex items-center'>
                    <hr className='w-[72px] border-[#FBD784]' /> <span className='mx-[32px] text-[#FBD784] text-[18px]'> A HIKING GUIDE</span>
                  </div> 
                  <span className='text-[88px] my-[32px] '>Be Prepared For The Mountains And Beyond!</span>
                  <span>scroll down</span>
            </div>
            <div className=''> div3 </div> 
      </div> 

       <Content/>
        
    </div>
  )
}

export default Body