import React, { useEffect, useState } from 'react'
import logo from '../assets/images/webp/logo.webp';
import { NAVBAR_DATA } from '../utils/Helper';

const Header = () => {

    const [show, setShow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                document.body.style.overflow = show ? "" : "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
        };
    }, [show]);
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        if (window.innerWidth < 992) {
            setShow(!show);
        } else {
            e.preventDefault();
        }
    };
    return ( 
        <>
            <div className='container relative z-[2]'>
                <div className={`${!show ? "min-h-screen" : ""} `}>
                    <div className="flex justify-between items-center bg-transparent py-1.5">
                        <a href="/">
                            <img className='pointer-events-none w-[68px]' src={logo} alt="#" />
                        </a>
                        <div className={`flex flex-col lg:flex-row bg-blue-500 lg:bg-transparent items-center gap-7 lg:gap-6 max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                            }`}>
                            {NAVBAR_DATA.map((items, index) => (
                                <a key={index} href={`/${items.url}`} onClick={(e) => handleClick(e, items.url.substring(1))} className='font-medium lg:text-base text-lg leading-5 text-white ease-linear after:absolute after:bg-white after:h-[2px] after:w-0 after:left-[50%]
                    after:translate-x-[-50%] hover:after:w-[100%] after:bottom-[-5px] after:rounded after:duration-200 after:ease-linear after:mx-auto relative'>{items.text}</a>
                            ))}
                            <div className="">
                                <button
                                    className="font-medium lg:text-base text-lg leading-5 text-white flex items-center space-x-1">
                                    <span>More</span>
                                </button>
                            </div>
                            <button className='sm:p-[13px_32px] p-[12px_24px] lg:hidden border lg:text-vibrantBlue text-white lg:border-vibrantBlue border-white rounded-lg font-medium text-base leading-4 lg:hover:text-white hover:text-vibrantBlue hover:bg-vibrantBlue duration-300'>
                                <span className="relative z-10">Enter App</span>
                            </button>
                        </div>
                        <button className='sm:p-[13px_32px] bg-white xl:bg-transparent p-[12px_24px] hidden lg:block border lg:text-vibrantBlue text-white lg:border-vibrantBlue border-white rounded-lg font-medium text-base leading-4 lg:hover:text-white hover:text-vibrantBlue hover:bg-vibrantBlue duration-300'>
                            <span className="relative z-10">Enter App</span>
                        </button>
                        <button
                            aria-label='Toggle Navigation Menu'
                            className="cursor-pointer relative w-8 h-7 z-[90] lg:hidden"
                            onClick={() => setShow(!show)}>
                            {[...Array(3)].map((_, i) => (
                                <span key={i} className={`w-full h-1 rounded-xl bg-white block duration-300 ease-linear absolute ${i === 0 ? "top-0 left-0" : i === 1 ? "top-1/2 -translate-y-1/2" : "bottom-0 left-0"} ${i === 0 && !show ? "rotate-45 top-1/2 -translate-y-1/2" : ""} ${i === 2 && !show ? "-rotate-45 top-1/2 -translate-y-1/2 bottom-auto" : ""} ${i === 1 && !show ? "hidden" : "flex"}`}></span>
                            ))}
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
