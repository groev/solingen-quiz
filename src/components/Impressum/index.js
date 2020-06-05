import React from "react";
import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className="inner">
        <h1>Impressum</h1>
        <div>
          Magnus Westhofen
          <br /> Turner Straße 41
          <br /> 42699 Solingen
        </div>
      </div>
    </motion.div>
  );
}
