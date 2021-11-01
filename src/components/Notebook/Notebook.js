import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./Notebook.css";

const Notebook = (props) => {
  const deleteNotebook = (id) => {
    firebase.database().ref("notebook").child(id).remove();
  };

  return (
    <>
      <section className="notes-wrapper">
        <h3>Notes</h3>
        <div className="notes">
          {props.notebook.map((note, index) => (
            <React.Fragment key={index}>
              <div className="note" key={note.id}>
                <div className="note-title">
                  <h3>{note.title}</h3>
                  <div
                    className="remove"
                    onClick={() => deleteNotebook(note.id)}
                  >
                    x
                  </div>
                </div>
                <div className="note-content">
                  <p>{note.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Notebook;
