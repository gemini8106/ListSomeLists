import React from "react";
import '../TodoList/TodoList.css'

const TodoList = ({todos, handleDeleteId}) =>{
  console.log(todos)
  const lists = todos.map((list,id) => 
  <div key={id} id={id}>
    <div >
      <div className="item_third_container">
        <li className="item">
          {list}
        </li>
        <button className="btn_delete" onClick={() => handleDeleteId(id)}>Delete</button>
      </div>
    </div>
    <hr></hr>
  </div>
  )
  return(
    <div id="item_first_container">
      <div className="item_second_container">
        {lists}
      </div>
    </div>
  )
}

export default TodoList;

