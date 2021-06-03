import React, { useState } from 'react';

import styles from './UploadForm.module.scss';
import ProgressBar from '../../Components/UI/progressBar/progressBar';
import AddIcon from '../../Add.svg';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    // console.log('changed');
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Only allowed png & jpeg images');
    }
  };

  return (
    <>
      <form action="">
        <label>
          <input type="file" onChange={changeHandler} />
          <img src={AddIcon} alt="Add Icon" className={styles.icon} />
        </label>
        <span className={styles.output}>
          {error && <div className={styles.error}>{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </span>
      </form>
    </>
  );
};

export default UploadForm;
