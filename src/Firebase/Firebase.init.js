import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";



const initializeConfig = () => {
    initializeApp(firebaseConfig);
}

export default initializeConfig;