import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import useStorage from '../../../hooks/useStorage';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <motion.div
        className={styles.ProgressBar}
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
      />
    </>
  );
};

export default ProgressBar;
