import React, {useEffect, useState} from 'react'

function Timer(props) {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        let interval
        if (play) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59)
                        setMinutes(minutes -1)
                    } else {
                        setSeconds(0)
                        setMinutes(0)
                        setPlay(false)
                        props.setModal(true)
                    }
                } else {
                    setSeconds(seconds -1)
                }
            }, 1000)
        }
        return () => {clearInterval(interval)}
    }, [play, seconds])

    function playPause() {
        if (play) {
            setPlay(false)
        } else {
            setPlay(true)
        }
    }

    function setButtonPlay() {
        if (play) {
            return 'Pause'
        } else {
            return 'Play'
        }
    }

    function increaseMinutes() {
        if (minutes >= 60) {
            setMinutes(60)
        } else {
            setMinutes(minutes + 1)
        }
    }

    function decreaseMinutes() {
        if (minutes <= 0) {
            setMinutes(0)
        } else {
            setMinutes(minutes - 1)
        }
    }

    function resetTimer() {
        setMinutes(25)
        setSeconds(0)
    }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
        <div className="container">
            <div className="timer">{timerMinutes} : {timerSeconds}</div>
            <div>
                <button onClick={playPause}>{setButtonPlay()}</button>
                <button onClick={increaseMinutes}>+</button>
                <button onClick={decreaseMinutes}>-</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Timer