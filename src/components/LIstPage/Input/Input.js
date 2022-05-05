import React, { useRef } from "react";
import '../Input/Input.css'

const Input = ({addInputValue}) => {
  const inputRef = useRef();

  const addNewInput = () => {
    if (inputRef.current.value != ''){
      addInputValue(inputRef.current.value);
      inputRef.current.value = '';
    }
  }
  return(
    <div id="input_container">
      <input type = 'text' placeholder="add some lists here" ref={inputRef}></input>
      <button id="btn_add" onClick={addNewInput}>add</button>
    </div>
  )

}

export default Input;
