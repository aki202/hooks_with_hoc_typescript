import React from "react";
import useCounter, { ICounter } from "../hooks/useCounter";

// Componentに注入するpropsの型定義
// 個別の型はカスタムHooksからコピーしている
export interface IInjectedCounter {
  count: ICounter["count"];
  onIncrement: ICounter["onIncrement"];
}

// Tは<ICounterProps & 注入対象Componentのpropsの型>という型になる
const withCounter = <T extends unknown>(
  // Wrappeeは注入対象Component
  Wrappee: React.ComponentType<T>
) => {
  // orgPropsは注入対象Componentが元々持っているprops
  // TからIInjectedCounterを消去(Omit)し、orgPropsの型だけを抽出する
  return (orgProps: Omit<T, keyof IInjectedCounter>) => {
    const { count, onIncrement } = useCounter();

    return (
      <Wrappee count={count} onIncrement={onIncrement} {...(orgProps as T)} />
    );
  };
};

export default withCounter;
