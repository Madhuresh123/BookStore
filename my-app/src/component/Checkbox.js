import React, { useState } from 'react'
import './checkbox.css'

function Checkbox(props) {

    const [isListOpen, setIsListOpen] = useState(false);

    const toggleList = () => {
      setIsListOpen(!isListOpen);
    };

  return (
    <div className="ratings-container">
    <div className="ratings-header" onClick={toggleList}>
      <span className="ratings-title">{props.title}</span>
      <div className={`arrow ${isListOpen ? 'open' : ''}`}>&#x25BC;</div>
    </div>
    <ul className={`ratings-list ${isListOpen ? 'show' : ''}`}>
      <li>
        <label>
          <input type="checkbox" />
          <span className="checkbox-label">{props.op1}</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span className="checkbox-label">{props.op2}</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span className="checkbox-label">{props.op3}</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span className="checkbox-label">{props.op4}</span>
        </label>
      </li>
    </ul>
  </div>

  )
}

export default Checkbox