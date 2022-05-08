import React from "react";
import "../Homepage/HomePage.css";
import { signIn } from "../../modules";

////click sign in 時，由module.js引入sign in函數
const HomePage = () => {

  return (
    <div id="homepage_container">
      <div>
        <h1 className="list_title">List Some Lists</h1>
        <button id="btn_tolist" onClick={() => signIn()}>Sign In With Google</button>
      </div>
    </div>
  )
}

export default HomePage;