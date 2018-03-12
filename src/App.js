import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      { name: "sam", age: "10" },
      { name: "dan", age: "40" },
      { name: "jenny", age: "20" }
    ],
    username: 'demouser'
  }

  //nameChange is called on Person component input box element change.
  //We have the input box inside the Person.js file.
  nameChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "10" },
        { name: "dan", age: "40" },
        { name: "jenny", age: "20" }
      ]
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "10" },
        { name: "dan", age: "40" },
        { name: "jenny", age: "20" }
      ]
    })
  }

  changeUserHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    //this style constant is used for inline styling of button
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue'
    }

    return (
      <div className="App">
        <Person name="heman" age="30">My hobbies: Playing videogames</Person>
        {/*My hobbies: Videogames are accessed using {props.children} 
      inside the Person component definition*/}


        {/*below we are using state data, but above we are passing
        hard coded name and age.
        ===Note: using bind is preferred way to call a function====
        */}
        <Person
          onClick={this.switchNameHandler.bind(this, "bindman")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />

        <Person
          click={this.switchNameHandler.bind(this, "batman")}
          change={this.nameChange}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        {/*below we are calling a function without bind, 
        but by returning this.swit..().
        This is ok, but for scaling purpose use bind.
        We are using an inline style for our button
        */}
        <button style={style} onClick={() => this.switchNameHandler("wonderwoman")}>Switch name</button>

        <UserInput userChange={this.changeUserHandler} username = {this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="timuser" />
      </div>
    );
  }
}

export default App;
