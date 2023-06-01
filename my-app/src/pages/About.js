import React, {useContext, useEffect} from 'react'
import noteContext from '../context/NoteContext'

function About() {

    const context = useContext(noteContext)
    const {note, getNotes, deleteNote} = context

    useEffect(() => {
      getNotes()
      // eslint-disable-next-line

  },[])

  return (
    <>
    {note.map(element => {
      return (
        <div key = {element.title}> 
        <h2>{element.title} and {element.description}</h2>
        <button type='button' style={{ margin: "5px" }} >edit</button>
        <button type='button' onClick={ () => deleteNote(element._id)  }>delete </button>        
        </div>
      )
    }
    
    )}
    </>
  )
}

export default About