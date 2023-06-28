import React, { useReducer, useState } from "react";
import "./checkbox.css";
import { useNavigate } from "react-router-dom";

function Checkbox(props) {
  const [isListOpen, setIsListOpen] = useState(false);

  const navigate = useNavigate();

  const initialState = true;

  const reducer = (state, action) => {
    switch (action.type) {
      case "op1Checked":
        if (state) {
          navigate(
            `/${decodeURIComponent(props.op1.toLowerCase()).split("★")[0]}`
          );
        } else {
          navigate(`/`);
        }
        return !state;

      case "op2Checked":
        if (state) {
          navigate(
            `/${decodeURIComponent(props.op2.toLowerCase()).split("★")[0]}`
          );
        } else {
          navigate(`/`);
        }
        return !state;

      case "op3Checked":
        if (state) {
          navigate(
            `/${decodeURIComponent(props.op3.toLowerCase()).split("★")[0]}`
          );
        } else {
          navigate(`/`);
        }
        return !state;

      case "op4Checked":
        if (state) {
          navigate(
            `/${decodeURIComponent(props.op4.toLowerCase()).split("★")[0]}`
          );
        } else {
          navigate("/");
        }
        return !state;

      default:
        return !state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
          <input
            type="checkbox"
            value={props.op1}
            id={props.op1}
            onChange={() => dispatch({ type: "op1Checked" })}
          />
          {props.op1}
        </li>
        <li>
          <input
            type="checkbox"
            value={props.op2}
            id={props.op2}
            onChange={() => dispatch({ type: "op2Checked" })}
          />
          {props.op2}
        </li>
        <li>
          <input
            type="checkbox"
            value={props.op3}
            id={props.op3}
            onChange={() => dispatch({ type: "op3Checked" })}
          />
          {props.op3}
        </li>
        <li>
          <input
            type="checkbox"
            value={props.op4}
            id={props.op4}
            onChange={() => dispatch({ type: "op4Checked" })}
          />
          {props.op4}
        </li>
      </ul>
    </div>
  );
}

export default Checkbox;
