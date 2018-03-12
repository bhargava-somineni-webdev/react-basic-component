import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            {/* any content passed in between <Person> and </Person> accessed using {props.children}
            Eg: <Person> My hobbies: Videogames</Person> 
            Note: My hobbies: Videogames is the child content
            of Person component and accessed using {props.children}*/}
            <input onChange={props.change} value={props.name} />
        </div>
    );
}

export default Person;