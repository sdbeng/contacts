import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ContactsList extends Component {
  // constructor() {
  //
  // }
  render(){
    const people = this.props.contacts

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsList contacts={[
          {name:'Michael'},
          {name:'Jose'},
          {name:'Maria'}
        ]}/>
        <ContactsList contacts={[
          {name:'Benedetto'},
          {name:'Perez'},
          {name:'Gago'}
        ]}/>
      </div>
    );
  }
}

export default App;
