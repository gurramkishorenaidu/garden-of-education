import React from "react";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  return (
    
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        className="fixed bottom-0 right-0 mb-4 mr-4 animate-bounce"
      >
        <img
          src="https://cdn.svgporn.com/logos/whatsapp-icon.svg"
          alt="WhatsApp logo"
          className="w-8 h-8"
        />
      </a>
    
  );
};

export default Whatsapp;
