import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Pricing from './Components/Pricing/Pricing';
import Developers from './Components/Developers/Developers';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


function App() {
  return (
    <div className='Nav'>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div>
        <motion.div
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <Home />
        </motion.div>
        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <About />
        </motion.div>
        <motion.div
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <Services />
        </motion.div>
        <motion.div
          id="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <Pricing />
        </motion.div>
        <motion.div
          id="developers"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <Developers />
        </motion.div>
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  
  );
}

export default App;
