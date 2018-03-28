import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {id: "a1", name: "Max", age: 28},
      {id: "a2", name: "Manu", age: 29},
      {id: "a3", name: "DinhVan", age: 27}
    ],
    ortherState: "some orther value",
    showPerson: false
  }

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

    let persons = null;
    let btnClass = '';

    if(this.state.showPerson){
      persons = (
        <div>
          {/* <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} />
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}
            click={this.switchNameHandel.bind(this, "Max")}
            changed={this.nameChangedHandel}  > My Hobbies: Racing </Person>
          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age} /> */}
            {
              this.state.person.map((person, index) => {
                return <Person 
                  click={() => this.deletePersonHandel(index)}
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandel(event, person.id)} />
              })
            }
        </div>
      );

      btnClass = classes.Red;
      
    }

    const assignedClasses = [];
    if(this.state.person.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(this.state.person.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (

      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* <button onClick={ this.switchNameHandel.bind(this, "Messi")}>Switch name</button> */}
        {/* <button 
          style={style}
          onClick={() => this.switchNameHandel("Messi")}>Switch name</button> */}
          <button 
          className={btnClass}
          onClick={this.togglePersonHandel}>Toggel Persons</button>
        {/* <Person name="Max" age="28" />
        <Person name="Manu" age="29"> My Hobbies: Racing </Person>
        <Person name="Dinh Van" age="27" /> */}

        {/* condition panalty */}
        {/* {
          this.state.showPerson === true ?
            <div>
              <Person 
                name={this.state.person[0].name} 
                age={this.state.person[0].age} />
              <Person 
                name={this.state.person[1].name} 
                age={this.state.person[1].age}
                click={this.switchNameHandel.bind(this, "Max")}
                changed={this.nameChangedHandel}  > My Hobbies: Racing </Person>
              <Person 
                name={this.state.person[2].name} 
                age={this.state.person[2].age} />
            </div> : null
        } */}
        {persons}
        
      </div>

    );
    // Understanding JSX
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React'));
  }
}

export default App;
