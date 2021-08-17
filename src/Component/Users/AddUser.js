import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [userName , setUserName]=useState('');
    const [error , setError] = useState()
   
    const userNameChangeHandler=(event)=>{

        setUserName(event.target.value);

    }
    const [userAge , setUserAge]=useState('');

    const userAgeChangeHandler=(event)=>{
        setUserAge(event.target.value);
    }
         
const addUserHandler=(event)=>{
    event.preventDefault();
    if (userName.trim().length===0 || userAge.trim().length===0 ){
        setError({

            title:'Invalid Input',
            message :'Please Enter A valid Name and Age (Non-Empaty Values). '

        })
        return
    }
    if (userAge<2){
        setError({

            title:'Invalid Age',
            message :'Please Enter A valid Age (Non-Empaty Values). '

        })
        return
    }
    const data= {
        name:userName,
        age:userAge,
    }
    props.onAddUser(data);
    setUserName('');
    setUserAge('');
}

 const errorHandler =()=>{

    setError(null);

 }



    return (
<>
        {error && < ErrorModel dismiss={errorHandler} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
       <form onSubmit={addUserHandler}>

    <label>Username</label>
    <input type='text' id='username' value={userName} onChange={userNameChangeHandler} />
    <label htmlFor="age">Age (Years)</label>
    <input type='number' id='userAge' value={userAge} onChange={userAgeChangeHandler} />
    <Button type="submit">Add User</Button>
       </form>
       </Card>
       </>
    );
}

export default AddUser;
