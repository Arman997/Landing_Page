import React from 'react'

function Header() {
  return (
    <>
        <header className='header'>
                
           <div className='flex justify-between items-center w-full pt-[64px] px-[2%]'>

                <div className=''><span className='text-[32px] font-bold'>MNTN</span></div>
                
                <div className='flex gap-[22px]'>
                    <a className='text-[18px] font-bold' href="">Equipment</a>
                    <a className='text-[18px] font-bold' href="">About us</a>
                    <a className='text-[18px] font-bold' href="">Blog</a>
                </div>
                    
                <div className=''>
                    <a className='text-[17px] font-bold' href="">Account</a>
                </div>
    
           </div>

        </header>   

    </>
  )
}

export default Header