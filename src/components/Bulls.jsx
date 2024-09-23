import React from 'react'

import men from '../assets/images/webp/men.webp'
import bear from '../assets/images/webp/bear.webp'
import bull from '../assets/images/webp/bull.webp'

const Bulls = () => {
    return (
        <div className='bg-stretch-layer bg-no-repeat bg-center bg-cover lg:pt-8 lg:h-[825px] md:h-[640px] sm:h-[556px] h-[520px] relative'>
            <div className='container relative'>
                <div className='flex justify-center lg:pt-0 pt-3'>
                    <h2 className='font-plus text-white font-extrabold lg:text-custom-3xl md:text-4xl sm:text-3xl text-xl leading-10 md:left-8 text-center max-w-[726px]'>
                        Amplify and STRETCH GAINS
                    </h2>
                </div>
                <div className='flex justify-center items-center lg:mt-[325px] md:mt-[196px] sm:mt-[148px] mt-[31px] relative z-[1] max-sm:p-4 max-sm:backdrop-brightness-50'>
                    <p className='max-w-[554px] text-white text-sm leading-[22px] font-normal text-center'>
                        We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.
                    </p>
                </div>
            </div>
            <img className='max-w-[569px] w-1/2 md:w-[41%] lg:w-1/2 xl:w-full absolute bottom-6 right-1 xl:right-[10%] pointer-events-none' src={bear} alt="bear" />
            <img className='max-w-[684px] w-7/12 md:w-1/2 lg:w-7/12 xl:w-full absolute bottom-6 left-1 xl:left-[10%] pointer-events-none' src={bull} alt="bull" />
            <img className='pointer-events-none max-w-[100px] w-[10%] sm:w-full absolute bottom-14 left-1/2 -translate-x-1/2' src={men} alt="men" />
        </div>
    )
}

export default Bulls