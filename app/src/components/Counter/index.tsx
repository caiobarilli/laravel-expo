import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handlePlayPause = (): void => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <S.Wrapper>
      <S.Text>Count: {count}</S.Text>
      <S.Text onPress={handlePlayPause}>{isRunning ? "Pause" : "Play"}</S.Text>
    </S.Wrapper>
  );
};

export default Counter;
