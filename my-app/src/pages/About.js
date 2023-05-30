import React, {useContext} from 'react'
import noteContext from '../context/NoteContext'

function About() {

    const a = useContext(noteContext)

  return (
    <div>About hello {a.name} my age is {a.Age}</div>
  )
}

export default About