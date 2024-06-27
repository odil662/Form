import React, { useRef } from "react";
import "./Form.css";
import { IoManSharp, IoWoman } from "react-icons/io5";

const FormRef = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();

  return (
    <div className="form">
      <label>
        Name:
        <br />
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <button onClick={() => nameRef.current.focus()}>Фокус</button>
      <br />
      <label>
        Surname:
        <br />
        <input type="text" ref={surnameRef} />
      </label>
      <br />
      <button
        onClick={() => {
          surnameRef.current.style.background !== "grey"
            ? (surnameRef.current.style.background = "grey")
            : (surnameRef.current.style.background = "white");
        }}
      >
        Сменить фон
      </button>
      <br />
      <p> Gender:</p>
      <div>
        <label>
          <IoManSharp />
          <input className="checkbox" type="radio" ref={maleRef} />
          <button
            onClick={() => {
              maleRef.current.checked === false
                ? (maleRef.current.checked = true)
                : (maleRef.current.checked = false);
            }}
          >
            Мужчина
          </button>
        </label>
        <br />
        <label>
          <IoWoman />
          <input className="checkbox" type="radio" ref={femaleRef} />
          <button
            onClick={() => {
              femaleRef.current.checked === false
                ? (femaleRef.current.checked = true)
                : (femaleRef.current.checked = false);
            }}
          >
            Женщина
          </button>
        </label>
      </div>
      <br />
    </div>
  );
};

export default FormRef;
