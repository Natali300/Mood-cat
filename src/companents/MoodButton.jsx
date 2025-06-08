import React, {useState} from "react";
import './MoodButton.css';

const moods = {
    "голодный кот":'/images/голодный кот.jpg',
    "игривый кот":'/images/игривый кот.jpg',
    "любопытный кот":'/images/любопытный кот.jpg',
    "сонный кот":'/images/сонный кот.jpg',
};
const MoodButton = ({setCurrentMoodImage}) => {
    const [mood, setMood] = useState("");
   const getRandomMood = () =>{
        const randomIndex = Math.floor(Math.random() * Object.keys(moods).length);
        const selectedMood = Object.keys(moods)[randomIndex];
        setMood(selectedMood);
        setCurrentMoodImage(moods[selectedMood]);
    };
    return (
        <div className='button-container'>
          <div className="button-mood">
             <button onClick={getRandomMood}>показать настроение</button>
             {mood && <h4>настроение кота: {mood}</h4>}  
          </div>
        </div>
    );
};

export default MoodButton;
