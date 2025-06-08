import { useState } from 'react'
import MoodButton from './companents/MoodButton'
import './App.css'

function App() {
  const [laikes, setLaikes] = useState(0);
  const [selectedMood, setCurrentMoodImage] = useState('/public/images/котик.jpg');

  return (
    <div className='container'>
      <div className='image-container'>
        <img className='cat-images' src={selectedMood} alt="кот" style={{width:'500px', height:'500px'}}/>
      </div>
      <div className='content-container'>
      <h2>котик и его настроение</h2>
      <p>Кошка — это небольшое, пушистое животное. <br/> 
        У нее четыре ноги, хвост и острые когти. <br/>
        Многие люди держат кошек в качестве домашних животных,<br/>
        потому что они игривые и ласковые. <br/>
        У кошек яркие глаза, а некоторые даже могут высоко прыгать. <br/>
       Они любят гоняться за игрушками и дремать на солнечных местах.<br/></p>
        <div className='button-container'>
        <div className='button-laik'>
          <button onClick={() => setLaikes(laikes+1)}>Лайк</button>
          <p className='button-laiks'>Лайков :{laikes}</p>
          </div>
        </div>
    </div>
        <MoodButton setCurrentMoodImage ={setCurrentMoodImage}/>
    </div>
  );
};
export default App;
