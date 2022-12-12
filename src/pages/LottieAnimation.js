import React from 'react';
import Lottie from 'react-lottie';
import Study from "../assets/Study.json"

const LottieAnimation= () => {
  
  return (
    <div>
      <Lottie animationData = {Study} />
        
    </div>
  );
};



export default LottieAnimation;
