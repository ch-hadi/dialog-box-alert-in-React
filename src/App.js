import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';




function App(props) {
  const [userList , setUserList]=useState([]);
  const addUserHandler=(data)=>{
    setUserList((prevList)=>{
      return [...prevList , data];
    })
  }
  return (
    <>
  <AddUser  onAddUser={addUserHandler}
  
  />
  <UserList
  users={userList}/>
    </>
  );
}

export default App;
