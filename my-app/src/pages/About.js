import React, {useContext, useEffect, useState} from 'react'
import noteContext from '../context/NoteContext'

function About() {

    const context = useContext(noteContext)
    const {note, getNotes, deleteNote, editNode, setTitle, title, setIsEdit, isEdit} = context
    const [editId, setEditId] = useState('')

    useEffect(() => {
      getNotes()
      // eslint-disable-next-line

  },[getNotes])

  const handleEdit = (id) => {
    setIsEdit(true)
    setEditId(id)
  }


  return (
    <>
    {note.map(element => {
      return ( 

        <div key = {element.title}> 
        <h2>{element.title} and {element.description}</h2>
        <button type='button' style={{ margin: "5px" }}  onClick={ () => handleEdit(element._id)}>edit</button>
        <button type='button' onClick={ () => deleteNote(element._id)  }>delete </button>        
        </div>
      )
    }
    
    )}

    {isEdit && 
    
    <div>
    <input type='text' onChange = {(e) => setTitle(e.target.value)}  value={title}/>  
    <button type='button' onClick={ () => editNode(editId) }>Save</button>
      
      </div>}


    </>
  )
}

export default About