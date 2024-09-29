import React from 'react'

const AboutCards = ({num,cardname,cardtext}) => {
  return (
    <div className='cards flex flex-col justify-center items-center w-96 h-48 p-5 gap-y-2'>
        <h2 className='text-yellow-400 font-bold text-3xl'>{num}</h2>
        <h3 className='text-black font-semibold text-xl'>{cardname}</h3>
        <p className='text-black text-center'>{cardtext}</p>
    </div>
  )
}

export default AboutCards;
