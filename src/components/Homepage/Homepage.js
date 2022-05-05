import React from "react";
import { useNavigate } from "react-router-dom";
import '../Homepage/HomePage.css'

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div id="homepage_container">
      <div>
        <h1 className="list_title">List Some Lists</h1>
        <button id="btn_tolist" onClick={() => navigate("/list")}>make some list</button>
      </div>
    </div>
  )
}

export default HomePage;