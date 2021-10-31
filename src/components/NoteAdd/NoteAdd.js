import React from "react";
import "./NoteAdd.css";

const NoteAdd = () => {
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
          />
        </div>
        <div className="form-group">
          <textarea
            name="noteadd-description"
            className="noteadd-description"
            placeholder="Note Description"
          ></textarea>
        </div>
        <div className="noteadd-button">
          <button>Add a Note</button>
        </div>
      </div>
    </>
  );
};

export default NoteAdd;
