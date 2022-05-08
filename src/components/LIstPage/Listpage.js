import React, {useEffect, useState}from "react";
import { updateToDoList, getData } from "../../modules";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "../LIstPage/ListPage.css";

////components
import Todolist from "./TodoList/Todolist";
import Input from "./Input/Input";

////接收app.js傳來的prop(userId)，做接下來的操作
////將todos做成array
const ListPage = ({ userId }) => {
  const[todos, setTodos] = useState([]);

  ////初始畫面時，從module.js取得getData函數，並將setTodos及userId傳到getData函數進行使用
  useEffect(() => {
    getData(setTodos, userId)
  },[])

  ////驗證，在todos有改變時，跑list update
  // useEffect(() => {
  //   console.log('list update')
  // }, [todos]);

  ////接收來自input.js的inputvalue，解構todos，並使用push將inputValue放進todos中，push方法不會創造新的array，還是以原本的array去做改變
  const addInputValue = (inputvalue) => {
    let toDoList = [...todos];
    toDoList.push(inputvalue);
    // let newToDoList = (currentList) => [...currentList, inputvalue]
    updateToDoList(setTodos, toDoList, userId);
  }

  ////接收來自todoList的id值，解構todos放入變數中，filter函數會產生新的array，故要放入到另一個變數中，再將setTodos、newToDoList、userId藉updateToDoList傳到module.js中運算
  const handleDeleteId = (id) => {
    let toDoList = [...todos];
    let newToDoList = toDoList.filter((todo, index) => index !== id);
    updateToDoList(setTodos, newToDoList, userId);
  }

  ////click啟動signout將auth清除
  const handleUserSignOut = () => {
    signOut(auth);
  }

  return(
    <div id="listpage_container">
      <h1 className="list_title">List Some Lists</h1>
      <div id="list_container">
        <Input addInputValue={addInputValue}/>
        <Todolist todos={todos} handleDeleteId={handleDeleteId}/>

      </div>
      <button id="btn_tohome" onClick={() => handleUserSignOut()}>Sign Out</button>
    </div>
  )
}

export default ListPage;