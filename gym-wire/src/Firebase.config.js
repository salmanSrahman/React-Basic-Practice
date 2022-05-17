import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ0XZoU6LPqrsG4hdK8Ep9ks4R2BVWWY4",
  authDomain: "independent-service-prov-76add.firebaseapp.com",
  projectId: "independent-service-prov-76add",
  storageBucket: "independent-service-prov-76add.appspot.com",
  messagingSenderId: "4128345782",
  appId: "1:4128345782:web:f544c7bfb8bde78cfe2017",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
