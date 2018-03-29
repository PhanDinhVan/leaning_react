import React, {Component} from 'react';
import Person from './Person/Person';


// stateless
// const persons = (props) => props.persons.map((item, index) => {
//         return <Person 
//               click={() => props.clicked(index)}
//               name={item.name} 
//               age={item.age}
//               key={item.id} 
//               changed={(event) => props.changed(event, item.id)} />
//       });

// export default persons;

// stateful
class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
    }

    render () {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((item, index) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={item.name} 
                age={item.age}
                key={item.id} 
                changed={(event) => this.props.changed(event, item.id)} />
          });
    }
}

export default Persons;
