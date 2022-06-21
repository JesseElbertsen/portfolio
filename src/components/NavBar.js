import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3, HiHome, HiUser, HiFolder, HiMail  } from 'react-icons/hi'

function NavBar(){

    const [ showNav, setShowNav] = useState(false);
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return(
        <nav className="md:flex justify-between items-center bg-red-900 sticky top-0 z-20 p-4 text-white">
            <div className="flex items-center justify-between">
                <a href="#">
                    <p></p>
                </a>
                {showNav ? (
                <HiOutlineMenuAlt3 
                onClick={() => setShowNav(!showNav)} 
                className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>) : (
                <HiOutlineMenuAlt2 
                onClick={() => setShowNav(!showNav)} 
                className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>)}
            </div>
            <ul className={(showNav ? "right-0" : '-right-full') + " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-red-800 bg-opacity-90 md:w-auto w-10/12 md:text-white text-white md:space-y-0 space-y-5 p-8 md:p-2 transition-right rounded-xl"}>
                <li className="hover:bg-red-600 hover:shadow-xl rounded-xl p-2 flex items-center w-24">
                    <Link className="flex flex-row" onClick={[scrollUp, setShowNav]} to="/">Home<HiHome className="ml-2 mt-1"/></Link>
                </li>
                <li className="hover:bg-red-600 hover:shadow-xl rounded-xl p-2 flex items-center w-24">
                    <Link className="flex flex-row" onClick={[scrollUp, setShowNav]} to="/about">About<HiUser  className="ml-2 mt-1" /></Link>
                </li>
                <li className="hover:bg-red-600 hover:shadow-xl rounded-xl p-2 flex items-center w-24">
                    <Link className="flex flex-row" onClick={[scrollUp, setShowNav]} to="/projects">Projects<HiFolder  className="ml-2 mt-1"/></Link>
                    
                </li>
                <li className="hover:bg-red-600 hover:shadow-xl rounded-xl p-2 flex items-center w-24">
                    <Link className="flex flex-row" onClick={[scrollUp, setShowNav]} to="/contact">Contact<HiMail  className="ml-2 mt-1"/></Link>
                    
                </li>
            </ul>
        </nav>
        
    );
}

export default NavBar;