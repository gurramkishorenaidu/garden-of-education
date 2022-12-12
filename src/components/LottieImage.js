import React from "react";
import Lottie from "react-lottie";

import marketing from "./marketing.json";

function LottieImage() {
  return (
    <Lottie
      height={600}
      width={800}
      options={{
        animationData: marketing,
        loop: true,
        autoplay: true,
      }}
    />
  );
}

export default LottieImage;


