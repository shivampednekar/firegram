import React from 'react';

// STYLE
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.NavWrapper}>
        <h2 className={styles.NavTitle}>
          Fire<span>gram</span>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
