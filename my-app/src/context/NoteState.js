import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const host = "http://localhost:5000/"
    const [note, setNote] = useState([])


    const getNotes = async () => {
        try {
          const response = await fetch(`${host}api/notes`, 
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          setNote(data);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

       // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    await fetch(`${host}api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const newNotes = note.filter((e) => { return e._id !== id })
    setNote(newNotes)
  }


    return (
        <NoteContext.Provider value= {{ note, getNotes, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 

