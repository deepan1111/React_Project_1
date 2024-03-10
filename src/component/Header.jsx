import React, { useState } from'react';
import Logo from "../asserts/pngwing.com.png"
function Header () {
    const [toggle,setToggle] = useState(false);
    return (
        <div className="flex justify-between bg-tirtary p-4">
            <h1 className="w-24 "><img src={Logo} alt='ntng'/></h1>
            <nav className='hidden md:block'>
            <ul className="pt-8  ">
                <li className="text-white">
                    <a  className="mx-3" href="/">Home</a>
                    <a  className="mx-3"href="#about">About</a>
                    <a  className="mx-3"href="#aest">Aesthetic</a>
                    <a  className="mx-3"href="#contact">Contact</a>

                </li>
            </ul>
            </nav>
            {toggle && <nav className='mob-nav mt-12 md:hidden'>
            <ul onClick={()=>{setToggle(!toggle)}} className=" ">
                <li className="flex  flex-col  text-white">
                    <a  className="mx-3" href="/">Home</a>
                    <a  className="mx-3"href="#about">About</a>
                    <a  className="mx-3"href="#aest">Aesthetic</a>
                    <a  className="mx-3 "href="#contact">Contact</a>
                    

                </li>
            </ul>
            </nav>}
            <button onClick={()=>setToggle(!toggle)} className=' lg:hidden w-8'><i class="fa-solid fa-bars"></i></button>
            
        </div>
    )
}

export default Header;