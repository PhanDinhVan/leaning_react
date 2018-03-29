import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.person.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.person.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    if(props.showPerson) {
        btnClass = classes.Red;
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggel Persons</button>
        </div>
    );
}

export default cockpit;