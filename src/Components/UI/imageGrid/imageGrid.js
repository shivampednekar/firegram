import React from 'react';
import { motion } from 'framer-motion';

import styles from './ImageGrid.module.scss';
import useFirestore from '../../../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <section>
      <div className={styles.Wrapper}>
        {docs &&
          docs.map((doc) => (
            <motion.div
              key={doc.id}
              className={styles.image_container}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="pict"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default ImageGrid;

// 57min 36sec
