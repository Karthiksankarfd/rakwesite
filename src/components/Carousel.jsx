import React, { useState, useEffect } from 'react';


const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
    "https://static.vecteezy.com/system/resources/previews/043/176/933/non_2x/house-perched-on-mountain-overlooking-mountains-free-photo.jpeg",
    "https://img.freepik.com/premium-photo/modern-mountain-house-with-amazing-view-night_605022-7154.jpg",
    "https://img.freepik.com/premium-photo/modern-mountain-house-with-stunning-night-view_604472-18405.jpg",
    "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302634.jpg"
  ];

  // ! Task 1 when ever user clicks the button we have to increase the index value of the all the images 
  // ! Task 2 When the index value reaches the value of array length make the index value to zero
  // ! task 3 animate the images whenever image changes

  const [Firstimageindex, setIndexFirstimageindex] = useState(1);
  const [Secondimageindex, setIndexSecondimageindex] = useState(3);
  const [Thirdimageindex, setIndexThirdimageindex] = useState(2);

  // * state for animation
  const [animate, setAnimate] = useState(false);

  // * button with statemanagement and logics
  const forward = () => {
    setAnimate(false);
    if (Firstimageindex === images.length - 1) {
      setIndexFirstimageindex(1);
    } else {
      setIndexFirstimageindex(Firstimageindex + 1);
      setIndexSecondimageindex(Firstimageindex);
      setIndexThirdimageindex(Firstimageindex - 1);
    }
    console.log("btn clicked");
  };

  // ! these logic should be opposite to forward logic
  // const backward = () => {
  //   setAnimate(false);
  //   if (Firstimageindex  === images.length - 1) {
  //     setIndexFirstimageindex(1);
  //   } else {
  //     setIndexFirstimageindex(Firstimageindex - 1);
  //     setIndexSecondimageindex(Firstimageindex);
  //     setIndexThirdimageindex(Firstimageindex + 1);
  //   }
  //   console.log("btn clicked");
  // };

  useEffect(() => {
    setAnimate(true);
  }, [Firstimageindex, Secondimageindex, Thirdimageindex]);

  let fbtn = "<"
   let bbtn = ">"
  return (
      <div className='h-96 w-full   py-5 flex gap-x-5 items-center your-container-class'>
          <div className='w-2/4 h-3/4 overflow-hidden lg:-ml-52 sm:-ml-10 relative '>
              <img src={images[Secondimageindex]} alt="" className={`w-full h-full object-cover ${animate ? 'animate-fadeIn' : ''} delay-100 absolute z-0` } />
              <div className={`w-full h-full bg-black absolute z-10 opacity-50 ${animate ? 'animate-fadeIn' : ''} delay-100`}></div>
              <button className='text-white absolute z-20 top-1/2 left-1/2 text-3xl' onClick={forward}>{fbtn}</button>
          </div>
          <div className='lg:w-5/6 sm:w-full  h-full overflow-hidden relative'>
                <img src={images[Firstimageindex]} alt="" className={`w-full h-full object-cover shadow-2xl ${animate ? 'animate-fadeIn' : ''} delay-100 absolute z-20`} />
                <div className ={`image-overlay-name-card w-full h-fit lg:py-5 lg:px-5 flex justify-start items-center text-white list-none absolute lg:left-10  z-20  ${animate ? 'animate-fadeIn' : ''} delay-500`} >
                    <img   src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Yello_logo_yellow_rgb.png"
                            className="sm:hidden lg:block lg:object-cover h-10 mr-10" alt="logo" />
                    <p>
                      DEVANHALI SITE, <br /> BENGALURU
                    </p> 
                </div>
          </div>
          <div className='w-2/4 h-3/4 overflow-hidden lg:-mr-52 sm:-mr-10 relative'>
              <img src={images[Thirdimageindex]} alt="" className={`w-full h-full object-cover ${animate ? 'animate-fadeIn' : ''} delay-100 absolute z-0`} />
              <div className={`w-full h-full bg-black absolute z-10 opacity-50 ${animate ? 'animate-fadeIn' : ''} delay-100`}></div>
              <button className='text-white text-3xl absolute z-20 top-1/2 right-1/2' onClick={forward}>{bbtn}</button>
          </div>
      </div>
  );
};

export default Carousel;
