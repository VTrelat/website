import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHB-ioiidG5SR797-gpAoX1c2_cgume1k",

    authDomain: "website-f9091.firebaseapp.com",

    projectId: "website-f9091",

    storageBucket: "website-f9091.appspot.com",

    messagingSenderId: "304700844781",

    appId: "1:304700844781:web:8ad408d3fdb6748f5fbae4",

    measurementId: "G-FM2LE0FRRZ",
};

export default firebaseConfig;
export const app = initializeApp(firebaseConfig);
