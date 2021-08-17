import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = (props) => {
 

    return (
        <Card className={classes.users}>
        <ul>

    {props.users.map((users)=>(<li key={users.name}>{users.name} ({users.age} Years Old !)</li>))}

        </ul>
        </Card>
        );
}

export default UserList;
