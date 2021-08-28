import './App.css';
import React , {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import photo1 from './images/first.webp'
import photo2 from './images/second.webp'
import photo3 from './images/third.webp'
import photo4 from './images/fourth.webp'
import photo5 from './images/fiveth.webp'
import BirthdayPerson from './birthdayCard';

function App() {
  const [number,setNumber] = useState(0)
  const allNum = useRef(null)
  useEffect(()=>{
    setNumber(allNum.current.childElementCount)
  })
  return (
    <main className='main'>
      <div className='birthDayList'>
        <section className='mainTitle'>
         <p> {number} birthdays today </p>
        </section>
        <section className='blockOfBirthday' ref={allNum}>
          <BirthdayPerson src={photo1} name='Bertie Yates' age='29'></BirthdayPerson>
          <BirthdayPerson src={photo2} name='Hester Hogan' age='32'></BirthdayPerson>
          <BirthdayPerson src={photo3} name='Larry Little' age='36'></BirthdayPerson>
          <BirthdayPerson src={photo4} name='Sean Walsh' age='34'></BirthdayPerson>
          <BirthdayPerson src={photo5} name='Lola Gardner' age='29'></BirthdayPerson>
        </section>
        <div className='clearButton' onClick={()=> clickHandler()}>Clear All</div>
      </div>
    </main>
  );
  function clickHandler(){
    allNum.current.textContent = '';
    setNumber(0);
  }
  
}

export default App;
