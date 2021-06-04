import React from "react";
import withCounter, { IInjectedCounter } from "../hocs/withCounter";

// 注入されるpropsの型IInjectedCounterをGenericsとして設定する
class ClassCounter extends React.Component<IInjectedCounter> {
  render() {
    return (
      <dl>
        <dt>Class Component</dt>
        <dd>
          {this.props.count}
          <button onClick={this.props.onIncrement}>+</button>
        </dd>
      </dl>
    );
  }
}

export default withCounter(ClassCounter);
