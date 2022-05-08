import React from "react";
import '../TodoList/TodoList.css'

////由listpage取得的prop(todos, handleDeleteId)，使用map函數對array取值，react中要給每一個數key value
const TodoList = ({todos, handleDeleteId}) =>{
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

