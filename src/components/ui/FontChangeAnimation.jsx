import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const fonts = [
    'roboto',
    'eduVic',
    'bjcree',
    'openSans',
    'robotoMono',
    'archivoBlack'
]

const FontChangeAnimation = ({ text='hello' }) => {
  
    const [fontIndex, setFontIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setFontIndex((prev) => (prev + 1) % fonts.length);
        }, 200);

        return () => clearInterval(interval);
    }, []);
    
    return (
    <motion.div
    initial={{ scale: 3, opacity: 0.5 }}
    animate={{ scale: 1, opacity: 1 }}
    trantion={{
        duration: 1,
        delay: 2,
        ease: 'backInOut'
    }}
    style={{
        fontFamily: fonts[fontIndex]
    }}
    className={`text-7xl`}>
      {text}
    </motion.div>
  )
}

export default FontChangeAnimation
