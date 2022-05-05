import React, {useEffect, useState}from "react";
import Input from "./Input/Input"
import Todolist from "./TodoList/Todolist"
import '../LIstPage/ListPage.css'
import { useNavigate } from "react-router-dom";
import { updateToDoList, getData } from "../../Store";

const ListPage = () => {
  const[todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    getData(setTodos)
  },[])

  // useEffect(() => {
  //   console.log('list update')
  // }, [todos]);

  const navigate = useNavigate();

  const addInputValue = (inputvalue) => {
    let toDoList = [...todos];
    toDoList.push(inputvalue);
    // let newToDoList = (currentList) => [...currentList, inputvalue]
    console.log(toDoList);
    updateToDoList(setTodos, toDoList);
  }

  const handleDeleteId = (id) => {
    let toDoList = [...todos];
    let newToDoList = toDoList.filter((todo, index) => index !== id);
    updateToDoList(setTodos, newToDoList);
  }

  return(
    <div id="listpage_container">
      <h1 className="list_title">List Some Lists</h1>
      <div id="list_container">
        <Input addInputValue={addInputValue}/>
        <Todolist todos={todos} handleDeleteId={handleDeleteId}/>

      </div>
      <button id="btn_tohome" onClick={() => navigate("/")}>back to home</button>
    </div>
  )
}

export default ListPage;