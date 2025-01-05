import React from 'react';
import './Tagline.css'; // Import the CSS for styling
import { motion } from "framer-motion";
const Tagline = (props) => {
  return (
    <div className="tagline-container">
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }}  transition={{ duration: 2}} className="tagline-heading">
        {props.heading}
      </motion.h1>
      <p className="tagline-subheading">
        {props.sub}
      </p>
    </div>
  );
};

export default Tagline;
