import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../App/App.css'

////pages
import HomePage from "../components/Homepage/Homepage";
import ListPage from "../components/LIstPage/Listpage";

const App = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;