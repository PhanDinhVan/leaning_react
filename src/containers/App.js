import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      person: [
        {id: "a1", name: "Max", age: 28},
        {id: "a2", name: "Manu", age: 29},
        {id: "a3", name: "DinhVan", age: 27}
      ],
      ortherState: "some orther value",
      showPerson: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // state = {
  //   person: [
  //     {id: "a1", name: "Max", age: 28},
  //     {id: "a2", name: "Manu", age: 29},
  //     {id: "a3", name: "DinhVan", age: 27}
  //   ],
  //   ortherState: "some orther value",
  //   showPerson: false
  // }

  // comment thang nay de lam deletet
  // switchNameHandel = (newName) => {
  //   // console.log("I like React")
  //   this.setState({
  //     person: [
  //       {name: newName, age: 28},
  //       {name: "Manu", age: 29},
  //       {name: "DinhVan", age: 26}
  //     ]
  //   })
  // }

  nameChangedHandel = ( event, id ) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const persons = {
      ...this.state.person[personIndex]
    };
    // const persons = this.state.person[personIndex]; // not use

    persons.name = event.target.value;

    const list_person = [...this.state.person];
    list_person[personIndex] = persons;


    this.setState( {person: list_person} );
  }
 
  togglePersonHandel = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandel = (PersonIndex) => {
    // const person = this.state.person;
    const person = [...this.state.person];
    person.splice(PersonIndex, 1);
    this.setState({person: person});
  }

  render() {

    console.log('[App.js] Inside render');

    let persons = null;

    if(this.state.showPerson){
      persons = <Persons persons={this.state.person}
              clicked={this.deletePersonHandel}
              changed={this.nameChangedHandel} />;
    }

    return (

      <div className={classes.App}>
        <Cockpit 
          // get from index.js
          appTitle={this.props.title}
          // get from App
          showPerson={this.state.showPerson} 
          person={this.state.person}
          clicked={this.togglePersonHandel}/>
        {persons}
        
      </div>

    );
    // Understanding JSX
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React'));
  }
}

export default App;