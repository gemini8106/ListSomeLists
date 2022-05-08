import { db, auth } from './firebase';
import { Timestamp, doc, updateDoc, getDoc, setDoc} from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

////等待listpage傳來的setTodos及userId數值(非同步)，進行資料庫存取
export const getData = async(setTodos, userId) => {
  ////firestore設定collection名稱為list，documents名稱為userId，有todolist就把todolist呈現到畫面，若沒有就建立資料夾存新的todolist
  const docRef = doc(db, "lists", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const todoList = docSnap.data().toDoList;
    setTodos(todoList);
  } else {
    await setDoc(doc(db, "lists", userId), {
      toDoList: [],
      lastUpdateTime: Timestamp.now()
    });
  } 
}
////從listpage取得setTodos、newToDoList、userId進行資料庫資料更新，新的資料存進資料庫後，使用setTodos呈現新的資料
export const updateToDoList = async (setTodos, newToDoList, userId) => {
  try {
    await updateDoc(doc(db, 'lists', userId), {
      toDoList: newToDoList,
      lastUpdateTime: Timestamp.now()
    })
    setTodos(newToDoList);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}

////取得google登入的provider
export const provider = new GoogleAuthProvider();

////sign in函數，點擊時跳出第三方google登入視窗，取得auth及provider後登入取得result，代表登入成功
export const signIn = () => {
  signInWithPopup(auth, provider);
    // .then((result) => {
    //   // The signed-in user info.
    //   const uid = result.user.uid;
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorMessage = error.message;
    // })
}