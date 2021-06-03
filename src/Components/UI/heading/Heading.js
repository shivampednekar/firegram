import React from 'react';

// STYLE
import styles from './Heading.module.scss';

const Title = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <h1>Beautiful free, photos</h1>
        {/* <h1>Your Pictures</h1> */}
        <p>Gifted by the world's most generous community of photographers.</p>
      </div>
    </>
  );
};

export default Title;
