import React, { useState } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { microwaveTimer } from '../../assets/images/images.index'
import '../css/Timer.scss'

const timerHands = [
    {hand: "Hours"}, {hand: "Minutes"}, {hand: "Seconds"}
]

export default function Timer() {
    const [startTimer, setStartTimer] = useState(false);
    const [countdownTime, setCountdownTime] = useState({
        Hours: 0, Minutes: 0, Seconds: 0
    })
    const [timerKey, setTimerKey] = useState(0);
    
    const renderTime = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60

        return `${hours<10?'0':''}${hours}:${minutes<10?'0':''}${minutes}:${seconds<10?'0':''}${seconds}`
    }

    const handleDecreaseTime = (hand)=> {
        if(countdownTime[hand] === 0) {
            (hand==="Minutes" || hand==="Seconds") && setCountdownTime((prev)=> ({...prev, [hand]: 59}))
            return;
        }

        setCountdownTime((prev)=> ({...prev, [hand]: prev[hand]-1}));
    }

    const handleIncreaseTime = (hand)=> {
        if(countdownTime[hand] === 59 && hand!=="Hours") {
            setCountdownTime((prev)=> ({...prev, [hand]: 0}));
            hand==="Minutes" ? handleIncreaseTime("Hours") : handleIncreaseTime("Minutes");
            return;
        }
        setCountdownTime((prev)=> ({...prev, [hand]: prev[hand]+1}));
    }

    const handleToggleTimer = ()=> {
        if(countdownTime['Hours']===0 && countdownTime['Minutes']===0 && countdownTime['Seconds']===0) return; 

        startTimer ? onTimerComplete() : setStartTimer(true); 
    }

    const onTimerComplete = ()=> {
        setCountdownTime({Hours: 0, Minutes: 0, Seconds: 0})
        setStartTimer(false);
        setTimerKey((prev)=> prev+1);
        const audio = new Audio(microwaveTimer);
        audio.play();
    }

  return (
    <div className='timer'>
        <div className="countdown-circle">
              <CountdownCircleTimer
                  key={timerKey}
                  isPlaying={startTimer}
                  duration={countdownTime["Hours"]*3600 + countdownTime["Minutes"]*60 + countdownTime["Seconds"]}
                  colors={"#FF6A6A"}
                  rotation='counterclockwise'
                  strokeWidth={8}
                  size={176}
                  trailColor='transparent'
                  onComplete={onTimerComplete}

              >
                  {renderTime}
              </CountdownCircleTimer>
        </div>
        <div className="countdown-setter">
            <div className="timer-hands">
                {timerHands.map(({hand})=> (
                    <div key={hand}>
                        <p>{hand}</p>
                        <div className={`arrow ${startTimer? 'disable':''}`} onClick={()=> handleDecreaseTime(hand)}><UpArrow/></div>
                        <h3>{countdownTime[hand]<10 ? "0" : ""}{countdownTime[hand]}</h3>
                        {hand!=='Seconds' && <span>:</span>}
                        <div className={`arrow ${startTimer? 'disable':''}`}  onClick={()=> handleIncreaseTime(hand)}><DownArrow/></div>
                    </div>
                    
                ))}
            </div>
            <button className="timer-toggle" onClick={handleToggleTimer}>{startTimer ? "Stop" : "Start"}</button>
        </div>
    </div>
  )
}

const UpArrow = ()=> {
    return <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
        <path d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z" fill="#949494" />
    </svg>
}

const DownArrow = ()=> {
    return <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
        <path d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z" fill="#949494" />
    </svg>
}
    
