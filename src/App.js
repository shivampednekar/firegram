import React, { useState } from 'react';

import Layout from './Components/layout/Layout';
import Title from './Components/UI/heading/Heading';
import UploadForm from './Containers/uploadform/uploadForm';
import ImageGrid from './Components/UI/imageGrid/imageGrid';
import Modal from './Components/UI/modal/modal';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Layout>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </Layout>
  );
};

export default App;
