'use client';
import React from 'react';
import { motion } from 'framer-motion';
const AnimationTest = () => {
  return (
    <div style={{ height: '50vh' }}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        style={{
          width: '200px',
          height: '200px',
          background: 'purple',
          margin: 'auto',
          borderRadius: '16px',
        }}
      >
        I animate *into view* 🎬 then keep rotating & fading with scroll 📜
      </motion.div>
    </div>
  );
};

export default AnimationTest;
