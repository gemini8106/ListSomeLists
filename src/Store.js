import { db } from './firebase';
import { Timestamp, doc, updateDoc, getDoc, setDoc} from 'firebase/firestore';

export const getData = async(setTodos) => {
  const docRef = doc(db, "lists", "user");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const todoList = docSnap.data().toDoList;
    setTodos(todoList);
  } else {
    await setDoc(doc(db, "lists", "user"), {
      toDoList: [],
      lastUpdateTime: Timestamp.now()
    });
  } 
}

export const updateToDoList = async (setTodos, newToDoList) => {
  try {
    await updateDoc(doc(db, 'lists', 'user'), {
      toDoList: newToDoList,
      lastUpdateTime: Timestamp.now()
    })
    setTodos(newToDoList);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}


