import React, { useRef } from "react";
import '../Input/Input.css'

////接收來自listpage的prop(addInputValue)
const Input = ({addInputValue}) => {
  ////使用useRef
  const inputRef = useRef();

  ////addInputValue中的input.current.value傳回listpage中，取得數值後歸零
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
