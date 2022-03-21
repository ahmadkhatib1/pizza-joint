import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { buttounHover, HomeVarints } from './Animate'

const Home = () => {
  return (
    <motion.div className="home container"
      variants={HomeVarints}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttounHover}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;