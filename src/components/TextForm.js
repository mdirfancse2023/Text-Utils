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
    navigator.clipboard.writeText(text);
  };
  const textClear = () => {
    setText("");
  };
  const textRead = () => {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[3];
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
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
            <h3>{props.text}</h3>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text}
            onChange={onChange}
            placeholder="Start Typing"
          ></textarea>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <button className="btn btn-primary mx-3" onClick={upperCase}>
            Convert To Uppercase
          </button>
          <button className="btn btn-success mx-3" onClick={lowerCase}>
            Convert To Lowercase
          </button>
          <button className="btn btn-info text-light mx-3" onClick={textCopy}>
            Copy To Clipboard
          </button>
          <button className="btn btn-danger mx-3" onClick={textClear}>
            Clear This Text
          </button>
          <button
            className="btn btn-warning mx-3 text-light"
            onClick={textRead}
          >
            Click To Read
          </button>
        </div>
      </div>
      <div className="my-3">
        <h6 className="d-flex justify-content-center">Your text Summary</h6>
        <p className="d-flex justify-content-center">
          {" "}
          No of Words : {text.length}
        </p>
        <p className="d-flex justify-content-center">
          {" "}
          No of Chracters : {text.split(" ").length}
        </p>
        <p className="d-flex justify-content-center">
          {" "}
          No of Minutes to read : {0.008 * text.split(" ").length}
        </p>
      </div>
      <div className="container">
        <h6 className="d-flex justify-content-center">Preview</h6>
        <p className="d-flex justify-content-center">{text}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  text: "Enter Your Text Here",
};
