

function Footer () {

    return (
    <>

        <div className="flex justify-between ">
                <div className="flex flex-col gap-y-8">
                    <span className='text-[32px] font-bold'>MNTN</span> 
                    <p className="text-lg font-bold w-[303px] h-[64px]">Get out there & discover your next slope, mountain & destination!</p>
                    <p className='inset-x-0 bottom-0'>&copy; Copyright 2024 MNTN, Inc. Terms & Privacy</p>
                </div>
               
               <div className="flex gap-x-48">

                    <div className="flex flex-col gap-y-7">
                            <span className="font-bold text-2xl text-[#FBD784]">More on The Blog</span>
                            <a href="">About MNTN</a>
                            <a href="">Contributors & Writers</a>
                            <a href="">Write For Us</a>
                            <a href="">Contact Us</a>
                            <a href="">Privacy Policy</a>
                        </div>
                        <div className="flex flex-col gap-y-7">
                            <span className="font-bold text-2xl text-[#FBD784]">More on The Blog</span>
                            <a href="">The Team</a>
                            <a href="">Jobs</a>
                            <a href="">Press</a>
                        </div>

               </div>
        </div>    

    </>
    
    )

}


export default Footer 