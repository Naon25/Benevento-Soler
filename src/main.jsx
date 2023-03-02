import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA8cLsAtBPE2oJCarjwbwnZFmO59XbzIoA",
  authDomain: "coder-react-c903b.firebaseapp.com",
  projectId: "coder-react-c903b",
  storageBucket: "coder-react-c903b.appspot.com",
  messagingSenderId: "790645062617",
  appId: "1:790645062617:web:d9b438913979667cda37c8",
  measurementId: "G-0YT7XBCL0Q"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

