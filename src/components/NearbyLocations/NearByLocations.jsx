import React from 'react'
import About from "../About"
const NearByLocations = () => {
  return (
    <section className='NearByLocations-flex-container  lg:px-24 py-10 sm:px-8 md:px-8 '>
            <h1 className='lg:text-[34px] sm:text-[34px] font-semibold font-poppins lg:tracking-wider sm:leading-[44px] text-[#5B5643]'>Nearby Locations</h1>
            <div className="relative flex items-center mt-4 mb-4 ">
                <svg
                className="absolute"
                width="fit-content"
                height="2"
                mviewBox="0 0 1242 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M1 1L1241 1.00011" stroke="white" stroke-linecap="round" />
                </svg>

                <svg
                className="absolute"
                width="191"
                height="4"
                viewBox="0 0 191 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M2 2L189 1.99998"
                    stroke="#CCAC00"
                    stroke-width="4"
                    stroke-linecap="round"
                />
                </svg>
            </div>

            <div className='map-flex-container lg:flex gap-x-5 my-5 h-fit md:flex-wrap'>
            <div className='flex flex-col gap-x-3 p-5 bg-[#F8F7F5] rounded-lg w-fit'>
                                <h3 className='text-[#5B5643] text-[20px] font-semibold'>Hospital</h3>
                                <div className='flex  flex-col justify-between text-[Montserrat] text-[#5B5643] gap-y-3'>
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                </div>
                        </div>

              {/* <div className='lg:w-[1000px]  sm:full md:full'> */}
              <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248532.93749048738!2d77.728086!3d13.267485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e30c8ad8d60b%3A0xc1d5f329078f2e32!2sRak%20developers!5e0!3m2!1sen!2sin!4v1727558135840!5m2!1sen!2sin" width="400px" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {/* </div> */}
                
            </div>


            <section className='flex flex-wrap gap-5'>

                        
                        <div className='flex flex-col gap-x-3 p-5 bg-[#F8F7F5] rounded-lg'>
                                <h3 className='text-[#5B5643] text-[20px] font-semibold'>Hospital</h3>
                                <div className='flex  flex-col justify-between text-[Montserrat] text-[#5B5643] gap-y-3'>
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                </div>
                        </div>

                        <div className='flex flex-col gap-x-3 p-5 bg-[#F8F7F5] rounded-lg'>
                                <h3 className='text-[#5B5643] text-[20px] font-semibold'>Hospital</h3>
                                <div className='flex  flex-col justify-between text-[Montserrat] text-[#5B5643] gap-y-3'>
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                </div>
                        </div>


                        <div className='flex flex-col gap-x-3 p-5 bg-[#F8F7F5] rounded-lg'>
                                <h3 className='text-[#5B5643] text-[20px] font-semibold'>Hospital</h3>
                                <div className='flex  flex-col justify-between text-[Montserrat] text-[#5B5643] gap-y-3'>
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                    <p className='pr-10'>New Manasa Hospital <span className='pl-10'>2.1 km</span> </p>
                                    
                                </div>
                        </div>
            </section>
    </section>
  )
}

export default NearByLocations
