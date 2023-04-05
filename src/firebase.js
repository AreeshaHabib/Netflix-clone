// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyDADSKCYYH6mGfMNuvnp7-0m4l6xYGglW4",
     authDomain: "netflix-clone-285ee.firebaseapp.com",
     projectId: "netflix-clone-285ee",
     storageBucket: "netflix-clone-285ee.appspot.com",
     messagingSenderId: "505729669002",
     appId: "1:505729669002:web:50f11ce862f35883719a73"
};

// const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = getAuth(firebaseApp);


// export { auth };
// export default db;
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
