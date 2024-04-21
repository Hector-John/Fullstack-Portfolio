import React from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="footer"
      >
        <hr />
        <div className="footer-content">
        <p className="year">{new Date().getFullYear()}</p>
          <p className="name">All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
