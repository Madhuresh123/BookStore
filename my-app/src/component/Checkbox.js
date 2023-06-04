import React, {useState } from "react";
import "./checkbox.css";
import { Link } from "react-router-dom";

function Checkbox(props) {
  const [isListOpen, setIsListOpen] = useState(false);


  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };


  return (
    <div className="ratings-container">
      <div className="ratings-header" onClick={toggleList}>
        <span className="ratings-title">{props.title}</span>
        <div className={`arrow ${isListOpen ? "open" : ""}`}>&#x25BC;</div>
      </div>
      <ul className={`ratings-list ${isListOpen ? "show" : ""}`}>
        <li>
          <Link className="checkbox-label" to={`/${decodeURIComponent(props.op1.toLowerCase()).split("★")[0]}`}>
            {props.op1}
          </Link>
        </li>
        <li>
          <Link className="checkbox-label" to={`/${decodeURIComponent(props.op2.toLowerCase()).split("★")[0]}`}>
            {props.op2}
          </Link>
        </li>
        <li>
          <Link className="checkbox-label" to={`/${decodeURIComponent(props.op3.toLowerCase()).split("★")[0]}`}>
            {props.op3}
          </Link>
        </li>
        <li>
          <Link className="checkbox-label" to={`/${decodeURIComponent(props.op4.toLowerCase()).split("★")[0]}`}>
            {props.op4}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Checkbox;
