import React from 'react'
import { motion } from 'framer-motion';

import OnTextFlicker from '../ui/OnTextFlicker'
import FontChangeAnimation from '../ui/FontChangeAnimation'

const HomePage = () => {
  return (
    <>
        <motion.div
        // initial={{ backgroundColor: '#111111' }}
        // animate={{ backgroundColor: 'var(--bg)' }}
        // transition={{
        //     duration: 2,
        //     delay: .5,
        //     ease: 'circIn'
        // }}
        className="w-full h-screen bg-bg flex justify-center items-center">
            {/* <h1
            className="text-text text-8xl font-mono font-bold uppercase">
                coming soon
            </h1> */}
            
            <div
            className='flex'>
                <OnTextFlicker text="Coming Soon!" />
                {/* <FontChangeAnimation text='hello' /> */}
            </div>
        </motion.div>
    </>
  )
}

export default HomePage
