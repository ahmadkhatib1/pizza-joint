import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ContainerVarints, cheldrenVarints } from './Animate';
const Order = ({ pizza, setShowModel }) => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false)
  }, 3000)
  useEffect(() => {
    setTimeout(() => {
      setShowModel(true)
    }, 5000);
  }, [setShowModel]);

  return (
    <motion.div
      variants={ContainerVarints}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order">
      <AnimatePresence>
        {showTitle && (
          <motion.h2
            exit={{ y: -1000 }}
          >Thank you for your order :</motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={cheldrenVarints}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={cheldrenVarints}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;