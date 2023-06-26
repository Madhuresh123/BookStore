import React, {useState } from "react";
import "./checkbox.css";
import {useNavigate } from "react-router-dom";

function Checkbox(props) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [op1Checked, setop1Checked] = useState(true);
  const [op2Checked, setop2Checked] = useState(true);
  const [op3Checked, setop3Checked] = useState(true);
  const [op4Checked, setop4Checked] = useState(true);

  const navigate = useNavigate();



  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleCheckBox1 = () => {
    setop1Checked(!op1Checked)
    console.log(op1Checked)
    if(op1Checked === true)
    navigate(`/${decodeURIComponent(props.op1.toLowerCase()).split("★")[0]}`);
    else
    navigate(`/`);

  }

  const handleCheckBox2 = () => {
    setop2Checked(!op2Checked)
    console.log(op2Checked)
    if(op2Checked === true)
    navigate(`/${decodeURIComponent(props.op2.toLowerCase()).split("★")[0]}`);
    else
    navigate(`/`);

  }

  const handleCheckBox3 = () => {
    setop3Checked(!op3Checked)
    console.log(op3Checked)
    if(op3Checked === true)
    navigate(`/${decodeURIComponent(props.op3.toLowerCase()).split("★")[0]}`);
    else
    navigate(`/`);

  }

  const handleCheckBox4 = () => {
    setop4Checked(!op4Checked)
    console.log(op4Checked)
    if(op4Checked === true)
    navigate(`/${decodeURIComponent(props.op4.toLowerCase()).split("★")[0]}`);
    else
    navigate(`/`);

  }

  return (
    <div className="ratings-container">
      <div className="ratings-header" onClick={toggleList}>
        <span className="ratings-title">{props.title}</span>
        <div className={`arrow ${isListOpen ? "open" : ""}`}>&#x25BC;</div>
      </div>
      <ul className={`ratings-list ${isListOpen ? "show" : ""}`}>
        <li>
            <input type='checkbox' value={props.op1} id={props.op1} onChange={handleCheckBox1}/>{props.op1}
        </li>
        <li>

      <input type='checkbox' value={props.op2} id={props.op2} onChange={handleCheckBox2}/>{props.op2}

        </li>
        <li>

<input type='checkbox' value={props.op3} id={props.op3} onChange={handleCheckBox3}/>{props.op3}

        </li>
        <li>
<input type='checkbox' value={props.op4} id={props.op4} onChange={handleCheckBox4}/>{props.op4}


        </li>
      </ul>
    </div>
  );
}

export default Checkbox;
