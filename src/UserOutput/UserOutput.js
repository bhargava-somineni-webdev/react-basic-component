import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <p>This user is named as {props.username}</p>
            <p>This user likes mangoes a lot</p>
        </div>
    );
}

export default Person;