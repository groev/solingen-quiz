import React from "react";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className="inner">
        <h1>Info</h1>
        <div>Lorem Ipsum</div>
      </div>
    </motion.div>
  );
}
