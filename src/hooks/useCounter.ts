import { useState } from "react";

// Hooksが返すObjectの型をICounterとして定義
export interface ICounter {
  count: number;
  onIncrement: () => void;
}

const useCounter = (): ICounter => {
  const [count, setCount] = useState<number>(0);
  const onIncrement = () => setCount(count + 1);

  return {
    count,
    onIncrement
  };
};

export default useCounter;
