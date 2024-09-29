import React from 'react'

const SiteSelectingsection = () => {
  return (
    <section className='py-5  px-8 md:px-16 lg:px-24 w-full'>
        <p>Select the perfect plot for your dream home today.</p>
        <p className='mb-5'>Secure your ideal space and start the journey to owning your dream home by booking now.</p>
        <div className='flex lg:flex-row sm:flex-col md:flex-col w-full'>
             <img className='border-8 lg:w-1/2 md:w-full sm:w-full' src="https://s3-alpha-sig.figma.com/img/00b9/318a/3a9b760371933f9fff09fee1a99e53cf?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdS~QlsSkcU3qgU03QNecrO1NUKHsVs9Q86Bhd618wXRzWtYZ75adeIgGvySeE01OXugIKCdCwKspcxdoHHMcAU9osZyObHk5xo2TwQZPukjHLdE~tZO74hFxpFAhjVP2LRoLxt3InWFbVaRucx1KWD9eaLzGG2SVcp--DjgAJKKBufV6EjEYf6UTLAYtnP~oKdvs8i9sA-g5zBTU~dKAZ75PmdMarYxyWcwXqViZkQ7y7gY0EfZkj-1vO-nDMm3w4AqovKcebF00s1GagBJb2EJTx3Yko1gsmTF7rh5mqvq8V972cyCzySN2~33LBYYqzz3l-kszPQDpbIUoi6ctw__" alt="" />

             <div className='flex flex-col lg:w-72 p-5 shadow-xl lg:ml-5 gap-y-3'>
                 <p>RAK Groups is a residential project In Devanahalli with 17 different gardens, exclusive spaces, & easy connectivity. RAK groups represents the pinnacle of luxury living.</p>

                 <div className='flex flex-col'>
                    <p>status</p>
                    <h3>New Launch</h3>
                 </div>

                 <div className='flex flex-col'>
                    <p>Price</p>
                    <h3>2.28 cr Onwards*</h3>
                 </div>

                 <button className='w-full p-3 border-[#CCAC00] border-2 rounded-lg'>Continue Booking</button>
             </div>
        </div>

        <div className='flex  lg:flex-row sm:flex-col md:flex-col gap-y-3 py-5'> 
            <div className='flex justify-start items-center mr-5'>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className='mr-5' xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="14" rx="4" fill="#5B5643"/>
                </svg>
                <p>Reserved Plots</p>
            </div>

            <div className='flex justify-start items-center mr-5'>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className='mr-5' xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="14" rx="4" fill="#CCAC00"/>
                </svg>
                <p>Available Plots</p>
            </div>

            <div className='flex justify-start items-center mr-5'>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className='mr-5' xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="14" rx="4" fill="#76AD00"/>
                </svg>
                <p>Selected Plots</p>
            </div>
        </div>
    </section>
  )
}

export default SiteSelectingsection
