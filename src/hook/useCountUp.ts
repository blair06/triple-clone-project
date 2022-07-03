import { useEffect, useState } from "react";

const easeOutQuint = (x: number) => {
  return 1 - Math.pow(1 - x, 5);
};

const useCountUp = (goal: number, duration: number) => {
  const [count, setCount] = useState(0);
  const speed = duration / goal;

  useEffect(() => {
    let currentNum = 0;

    const counter = setInterval(() => {
      currentNum += 1;
      setCount(currentNum);
      if (currentNum === goal) {
        clearInterval(counter);
      }
    }, speed);
  }, []);

  return count;
};

export default useCountUp;
