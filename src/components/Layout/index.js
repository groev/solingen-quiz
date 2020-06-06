import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/Solingen_wappen.svg";
import close from "../../assets/images/cancel.svg";

export default function Layout({ children }) {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div id="Layout">
      <div id="Header">
        <img src={logo} alt="Menu" className="logo" />
        <img
          src={menu}
          alt="Menu"
          className="menuButton"
          onClick={() => setMenuVisible(true)}
        />
      </div>
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            transition={{ ease: "easeInOut" }}
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            className="menu"
          >
            <img
              src={close}
              alt="Close"
              className="close"
              onClick={() => setMenuVisible(false)}
            />
            <ul>
              <li>
                <NavLink onClick={() => setMenuVisible(false)} to="/">
                  Start
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setMenuVisible(false)} to="/impressum">
                  Impressum
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
