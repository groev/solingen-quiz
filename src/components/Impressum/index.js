import React from "react";
import { useData } from "../../util/dataProvider";
import { motion } from "framer-motion";

export default function Impressum() {
  const { impressum } = useData();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div
        className="inner"
        dangerouslySetInnerHTML={{ __html: impressum }}
      ></div>
    </motion.div>
  );
}
