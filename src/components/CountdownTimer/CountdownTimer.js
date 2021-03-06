import React from "react";
import ReactCountdownClock from "react-countdown-clock";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 60vh;
`;

const CountdownTimer = ({ time, handleTimeOver }) => {
  // const [counter, setCounter] = useState(time);

  // useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

  //   if (counter == 0) handleTimeOver();

  //   return () => clearInterval(timer);
  // }, [counter]);

  //return <div>{counter}</div>;

  return (
    <StyledContainer>
      <ReactCountdownClock
        seconds={time}
        color="#6d64ff"
        alpha={0.9}
        size={100}
        onComplete={handleTimeOver}
      />
    </StyledContainer>
  );
};

export default CountdownTimer;
