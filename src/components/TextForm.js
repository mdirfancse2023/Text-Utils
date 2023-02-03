import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    setText(text.toUpperCase());
  };
  const lowerCase = () => {
    setText(text.toLowerCase());
  };
  const textCopy = () => {
    const textbox = document.getElementById('textbox');
    textbox.select();
    navigator.clipboard.writeText(text);
  };
  const textClear = () => {
    setText("");
  };
  const textRead = () => {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[4];
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const removeSpace = ()=>{
    setText(text.replace(/\s+/g,' ').trim());
  }
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label d-flex justify-content-center"
          >
            <h3 className={`text-${props.tmode}`}>{props.text}</h3>
          </label>
          <textarea
            className={`form-control bg-${props.mode} text-${props.tmode}`}
            id="textbox"
            rows="4"
            value={text}
            onChange={onChange}
            placeholder="Start Typing"
          ></textarea>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <button className={`btn btn-primary mx-3 my-1 text-${props.tmode}`} onClick={upperCase}>
            Convert To Uppercase
          </button>
          <button className={`btn btn-danger mx-3 my-1 text-${props.tmode}`} onClick={textClear}>
            Clear This Text
          </button>
          <button className={`btn btn-info text-${props.tmode} mx-3 my-1`} onClick={textCopy}>
            Copy To Clipboard
          </button>
          <button
            className={`btn btn-warning mx-3 my-1 text-${props.tmode}`} 
            onClick={textRead}
          >
            Click To Read
          </button>
          <button className={`btn btn-success mx-3 my-1 text-${props.tmode}`} onClick={lowerCase}>
            Convert To Lowercase
          </button>
          <button className={`btn btn-primary mx-3 my-1 text-${props.tmode}`} onClick={removeSpace}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="my-3">
        <h6 className={`d-flex justify-content-center text-${props.tmode}`}>Your text Summary</h6>
        <p className={`d-flex justify-content-center text-${props.tmode}`}>
          {" "}
          No of Words : {text.length}
        </p>
        <p className={`d-flex justify-content-center text-${props.tmode}`}>
          {" "}
          No of Chracters : {text.split(" ").length}
        </p>
        <p className={`d-flex justify-content-center text-${props.tmode}`}>
          {" "}
          No of Minutes to read : {0.008 * text.split(" ").length}
        </p>
      </div>
      <div className="container">
        <h6 className={`d-flex justify-content-center text-${props.tmode}`}>Preview</h6>
        <p className={`d-flex justify-content-center text-${props.tmode}`}>{text.length>0?text:"Enter Text in the Textbox To Preview Here"}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  text: "Enter Your Text Here",
};
