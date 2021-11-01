import React from "react";
import * as firebase from "firebase";
import Navbar from "./components/Navbar";
import NoteAdd from "./components/NoteAdd";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyA1qxiarwXOltSqNp345h5FxiJgPQF4Fx4",
  authDomain: "react-firebase-notebook-19187.firebaseapp.com",
  databaseURL:
    "https://react-firebase-notebook-19187-default-rtdb.firebaseio.com",
  projectId: "react-firebase-notebook-19187",
  storageBucket: "react-firebase-notebook-19187.appspot.com",
  messagingSenderId: "819670459741",
  appId: "1:819670459741:web:f40f70203b267e5c6e74b4",
  measurementId: "G-KVBJP9RYB0",
};
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="note-section">
        <NoteAdd />
      </div>
    </div>
  );
};

export default App;
