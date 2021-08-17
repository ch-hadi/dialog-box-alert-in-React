import React from 'react';
import Button from './Button';
import classes from './ErrorModal.module.css';
import Card from './Card';

const ErrorModel = (props) => {
    return (
        <div >
            <div className={classes.backdrop} onClick={props.dismiss} />
       <Card className={classes.modal} >
     
     <header className={classes.header}><h2>{props.title}</h2></header>
     
       <div className={classes.content}><p>{props.message}</p></div>

          <footer className={classes.actions}>
         <Button  onClick={props.dismiss}>Oky</Button>
     </footer>
        </Card>
        </div>
        
    );
}

export default ErrorModel;
