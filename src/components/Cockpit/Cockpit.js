import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.person.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.person.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    if(props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    return(
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggel Persons</button>
        </Aux>
    );
}

export default cockpit;