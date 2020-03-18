import React, { useState } from 'react';

const App = props => {
  //props(オブジェクト)をstateにまとめることも可能
  const [state, setState] = useState(props);
  //オブジェクト(state)を{name,price}に代入することでここに使うことができる
  const { name, price } = state;

  return (
    <>
      <p>
        現在の{name}は,{price}です
        {/* ()...state) スプレッド構文 */}
        {/* 一度stateを展開(...state)することでpriceのみ変更することができる */}
        <button onClick={() => setState({ ...state, price: price + 1 })}>
          +1
        </button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>
          -1
        </button>
        <button onClick={() => setState(props)}>Reset</button>
        <input
          value={name}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
      </p>
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
