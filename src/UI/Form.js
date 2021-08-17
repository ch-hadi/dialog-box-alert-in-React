import React from 'react';
import Button from '../Component/Button';
import InputComponent from '../Component/InputComponent';

const Form = () => {
    
    return (
        <div className='form-control'>
            <label>Username</label>
            <InputComponent />
            <label>Age (Years) </label>
            <InputComponent />
            <Button />
        </div>
    );
}

export default Form;
