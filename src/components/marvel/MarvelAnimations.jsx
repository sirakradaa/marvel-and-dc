import React from 'react'
import { motion } from 'framer-motion';
/* Page for transition animations */
const animations = {
    initial: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
}

// Pages are passed in as children and then undergo animations
const MarvelAnimations = ({ children }) => {
  return (
    <motion.div 
    variants={animations}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{ duration: 1 }}
    >
        {children}
    </motion.div>
  )
}

export default MarvelAnimations