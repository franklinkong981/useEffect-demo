import React, {useState} from "react";
import Timer from "./Timer.jsx";

const TimerWrapper = () => {
  const [timerVisible, setTimerVisible] = useState(true);
  const toggleTimer = () => {
    setTimerVisible(!timerVisible);
  };
  return (
    <div>
      <button onClick={toggleTimer}>Toggle Timer</button>
      {timerVisible && <Timer/>}
    </div>
  );
};

export default TimerWrapper;