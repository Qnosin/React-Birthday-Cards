import React from 'react'

function BirthdayPerson(props){
    return(
        <div className='birthdayPerson'>
            <img src={props.src} className='oval'></img>
            <div className='info'>
            <h4>{props.name}</h4>
            <p>{props.age} years</p>
            </div>
        </div>
    );
}
export default BirthdayPerson ;