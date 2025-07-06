'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SliderContent() {
  return (
    <div className="scroll-mt-1 overflow-x-hidden overflow-y-hidden absolute z-10 lg:top-3/4 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white uppercase">

      {/* Dikey çizgi */}
      <div className="w-px h-13 lg:h-20 bg-white mx-auto my-5 lg:my-10" />

      {/* Aşağıdan çıkan adres */}
      <motion.div
        className="max-w-2xl text-center font-semibold mx-auto text-xs tracking-wider leading-relaxed uppercase"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>zatibey aprt.</p>
        <p>suadiye mah. pemge gül sok. no:2</p>
        <p>suadiye – kadıköy – istanbul</p>
      </motion.div>
    </div>
  );
}
