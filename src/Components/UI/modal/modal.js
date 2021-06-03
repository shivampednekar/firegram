import React from 'react';
import { motion } from 'framer-motion';

import './Modal.scss';

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src={selectedImg} alt="modal" />
      </motion.div>
    </>
  );
};

export default Modal;

//1hr 06min 21sec completed
