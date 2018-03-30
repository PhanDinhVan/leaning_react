import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';


// stateless
// const person = (props) => {

//     // const rnd = Math.random();
//     // if(rnd > 0.7) {
//     //     throw new Error('Something went wrong');
//     // }

//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click} >I'm {props.name} and I am {props.age} year old</p>
//             <p> {props.children} </p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default person;


// stateful
class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }

    render () {

        console.log('[Person.js] Inside render');

        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} year old</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </WithClass>
        ) 
    }
}

export default Person;