import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    console.log("Adding Note", { title, description });
    setTitle("");
    setDescription("");
    setNotes((prevNotes) => [
      ...prevNotes,
      title && description && { title, description },
    ]);
    console.log("Updated Notes:", notes);
  };

  const deleteNote = (idx) => {
    notes.splice(idx, 1);
    setNotes([...notes]);
  };

  return (
    <div className="bg-yellow-200 h-screen lg:flex">
      <form
        onSubmit={(e) => addNote(e)}
        className="flex flex-col items-start gap-4 p-10 lg:w-1/2"
        action=""
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          className="p-2 border-2 rounded w-full"
          type="text"
          placeholder="Enter note heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-2 border-2 rounded h-32 w-full"
          placeholder="Enter note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-black py-2 px-4 rounded text-white w-full active:scale-95 transition-colors"
        >
          Add Note
        </button>
      </form>
      <div className="p-10 lg:border-l-2 bg-gray-400 lg:w-1/2">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-3 mt-5 overflow-auto h-[95%] scrollbar-hide">
          {notes.map((note, idx) => {
            return (
              <div
                key={idx}
                className=" h-52 flex flex-col justify-between px-4 py-7 bg-cover w-40 rounded-2xl bg-center bg-[url('https://marketplace.canva.com/EAGq4e4Rb4E/1/0/1131w/canva-purple-and-white-clean-lines-notes-flyer-7gTxcKZdBQM.jpg')]"
              >
                <div className="overflow-auto h-[95%]">
                  <h2 className="text-lg font-medium pt-4 leading-tight">
                    {note.title}
                  </h2>
                  <p className="px-2 py-1">{note.description}</p>
                </div>
                <button
                  onClick={() => deleteNote(idx)}
                  className="bg-red-500 text-white rounded cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
