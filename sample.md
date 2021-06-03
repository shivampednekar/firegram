# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

// label {
// color: var(--primary-light);
// display: block;
// width: 3.3rem;
// height: 3.3rem;
// font-size: 2.4rem;
// font-weight: 500;
// line-height: 3rem;
// margin: 1rem auto;
// border: 1.1px solid var(--primary-dark);
// border-radius: 50%;
// }

<!-- RUN COMD: yarn remove firebase
yarn remove firestore
npm install firebase* -->
<!-- 40min 46sec completed -->

import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
const [progress, setProgress] = useState(0);
const [error, setError] = useState(null);
const [url, setUrl] = useState(null);

useEffect(() => {
// references
const storageRef = projectStorage.ref(file.name);
const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setUrl(url);
    });

}, [file]);

return { progress, url, error };
}

export default useStorage;

rules_version = '2';
service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write;
}
}
}

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC76WIqWt9ULgThbbTIRnBhV61wg70PKg0",
    authDomain: "firegram-381a8.firebaseapp.com",
    projectId: "firegram-381a8",
    storageBucket: "firegram-381a8.appspot.com",
    messagingSenderId: "90106354481",
    appId: "1:90106354481:web:3565440cd06a68be2e6e10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<!-- OLD -->

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: 'AIzaSyD_ksASgcUQzzuOp1JZzzgD7JzPPuSIwy0',
authDomain: 'firegram-5e1ca.firebaseapp.com',
databaseURL: 'https://firegram-5e1ca.firebaseio.com',
projectId: 'firegram-5e1ca',
storageBucket: 'firegram-5e1ca.appspot.com',
messagingSenderId: '22292114246',
appId: '1:22292114246:web:3a415b407b6736084a1347',
};

<!-- FIREBASE RULE -->

: if request.auth != null
