import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Navbar from "./components/Navbar";
import NoteAdd from "./components/NoteAdd";
import Notebook from "./components/Notebook";
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
  const [notes, setNotes] = useState([]);

  const listenForChange = () => {
    firebase
      .database()
      .ref("notebook")
      .on("child_added", (snapshot) => {
        let note = {
          id: snapshot.key,
          title: snapshot.val().title,
          description: snapshot.val().description,
        };
        let notebook = notes;
        notebook.push(note);
        setNotes([...notes]);
      });

    firebase
      .database()
      .ref("notebook")
      .on("child_removed", (snapshot) => {
        let notebook = notes;
        notebook = notes.filter((note) => note.id !== snapshot.key);
        setNotes(notebook);
      });
  };

  useEffect(() => {
    listenForChange();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="note-section">
        <NoteAdd />
        <Notebook notebook={notes} />
      </div>
    </div>
  );
};

export default App;
