import React, { useState } from "react";

function NoteList() {
    const [notes, setNote] = useState([
        { title: "Sigmoid Formula",description: "1/(1+e^-x)" },
        { title: "Type of Deep Learning", description: "ANN, CNN, RNN" },
        { title: "Type of AI", description: "Narrow, General & Super AI" }
    ]);

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    function handleTitleChange(event) {
        setNewTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        setNewDescription(event.target.value);
    }

    function addNote() {
        if (newTitle.trim() !== "" && newDescription.trim() !== "") {
            setNote((e) => [
                ...e,
                { title: newTitle, description: newDescription }
            ]);
            setNewTitle("");
            setNewDescription("");
        }
    }

    function deleteNote(index) {
        const updateNote = notes.filter((_, i) => i !== index);
        setNote(updateNote);
    }

    return (
        <div>
            <h1 className="notes-taking">Notes Taking</h1>
            <div className="description-input">
                <h3>Title:</h3>
                <input
                    type="text"
                    placeholder="Enter the title"
                    value={newTitle}
                    onChange={handleTitleChange}/>

                <h3>Description:</h3>
                <input
                    type="text"
                    placeholder="Enter the description"
                    value={newDescription}
                    onChange={handleDescriptionChange}/>

                <button className="add-button" onClick={addNote}>
                    Add
                </button>
            </div>
            <ol>
                {notes.map((note, index) => (
                    <li key={index}>
                        <span className="text">
                            <strong>{note.title}</strong><br/> {note.description}
                        </span>
                        <button className="delete-button"
                                onClick={() => deleteNote(index)}> 
                                Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default NoteList;
