import React from 'react';

import Navbar from '../navigation/Navbar';

// STYLE
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.Container}>{children}</main>
    </>
  );
};

export default Layout;
