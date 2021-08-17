import React from 'react';
import { StyledComponent } from 'styled-components';

const Button = (props) => {
    const sub=(t)=>{

        console.log(t);
    }
    return (
        <div>
            <button type='submit' GetText={sub}>Add User</button>
        </div>
    );
}

export default Button;
