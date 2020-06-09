import React from "react";
import { useData } from "../../util/dataProvider";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Outro() {
  const { outro, questions } = useData();
  const history = useHistory();
  const search1 = /%correct%/gi;
  const search2 = /%possible%/gi;
  let newText = outro.text.replace(search1, localStorage.getItem("correct"));
  newText = newText.replace(search2, questions.length);
  return (
    <div className="container" id="Outro">
      <div className="inner">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {outro.headline}
        </motion.h1>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          exit={{ opacity: 0 }}
          className="text"
          dangerouslySetInnerHTML={{ __html: newText }}
        ></motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="btn"
          onClick={() => history.push("/")}
        >
          {outro.buttonlabel}
        </motion.div>
      </div>
    </div>
  );
}
