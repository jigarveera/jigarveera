import React from "react";
import { motion } from "framer-motion";

const OnTextFlicker = ({ text = "coming soon" }) => {
  return (
    <div className="flex text-4xl sm:text-6xl xl:text-9xl text-text font-bold ">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: index * 0.1,
          }}
          className="font-mono hover:font-sans"
          style={{
            textShadow: "6px 6px 8px rgba(0,0,0,0.3)"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default OnTextFlicker;