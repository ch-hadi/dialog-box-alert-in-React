import React, {useState} from 'react';


const InputComponent = (props) => {
    const [text , setText]= useState('');
    const getText=(event)=>{
 
        setText(event.target.value);

       props.GetText(text);
    }
    console.log(text);

    return (
        <div>
            <input type='text' onChange={getText} />
        </div>
    );
}

export default InputComponent;
