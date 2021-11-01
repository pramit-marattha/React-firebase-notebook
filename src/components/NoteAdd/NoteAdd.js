import React, { useState } from "react";
import * as firebase from "firebase";
import "./NoteAdd.css";

const NoteAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addNote = () => {
    if (title !== "" && description !== "") {
      firebase.database().ref("notes").push({
        title: title,
        description: description,
      });
    }
  };

  return (
    <>
      <div className="noteadd">
        <h1>Add a New Note</h1>
        <div className="form-group">
          <input
            type="text"
            className="noteadd-header"
            name="noteadd-header"
            placeholder="Note Title"
            value={title}
            onChange={handleTitleChange(event)}
          />
        </div>
        <div className="form-group">
          <textarea
            name="noteadd-description"
            className="noteadd-description"
            placeholder="Note Description"
            value={description}
            onChange={handleDescriptionChange(event)}
          ></textarea>
        </div>
        <div className="noteadd-button">
          <button onClick={() => addNote()}>Add a Note</button>
        </div>
      </div>
    </>
  );
};

export default NoteAdd;
