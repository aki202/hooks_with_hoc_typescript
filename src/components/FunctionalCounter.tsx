import React from "react";
import useCounter from "../hooks/useCounter";

const FunctionalCounter: React.VFC = () => {
  const { count, onIncrement } = useCounter();

  return (
    <dl>
      <dt>Functional Component</dt>
      <dd>
        {count}
        <button onClick={onIncrement}>+</button>
      </dd>
    </dl>
  );
};

export default FunctionalCounter;
