import React from 'react'

function Header() {
  return (
    <>
        <header className='header'>
                
           <div className='flex flex-row justify-between items-center w-full px-[2%] my-[64px]'>

                <div className=''><span className='text-[32px]'>MNTN</span></div>
                
                <div className='flex gap-[22px]'>
                    <a className='text-[18px]' href="">Equipment</a>
                    <a className='text-[18px]' href="">About us</a>
                    <a className='text-[18px]' href="">Blog</a>
                </div>
                    
                <div className=''>
                    <a className='text-[17px]' href="">Account</a>
                </div>
    
           </div>

        </header>   

    </>
  )
}

export default Header