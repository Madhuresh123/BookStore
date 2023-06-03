import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const host = "http://localhost:5000/"
    const [note, setNote] = useState([])
    const [title, setTitle] = useState()
    const [isEdit, setIsEdit] = useState(false)




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

      //edit a note
      const editNode = async (id) => {

        await fetch(`${host}api/notes/updatenote/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              }
        })
        const updateNote = note.map((element) => {
            if (element._id === id) {
              return { ...element, title: title };
            }
            return element;
          });

            setNote(updateNote)
            setIsEdit(false)
      }

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
        <NoteContext.Provider value= {{ note, getNotes, deleteNote, editNode, setTitle, title, setIsEdit, isEdit }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 

