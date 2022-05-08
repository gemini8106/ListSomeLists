import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import "../App/App.css"

////pages
import HomePage from "../components/Homepage/Homepage";
import ListPage from "../components/LIstPage/Listpage";


const App = () => {
  const[userId, setUserId] = useState("");
  // console.log(userId);
  
  ////在登入狀態有變化時做出反應(onAuthStateChanged函數),有user時，取得user.uid，沒有user時，設為null
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    })
  }, []);

  ////三元運算子，在抓到userId的情況下，導入list頁，並將userId傳到listPage供資料庫使用
  return(
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={userId ? <Navigate to="/list" /> : <HomePage />} />
          <Route path="/list" element={userId ? <ListPage  userId={userId} /> : <Navigate to="/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;