import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';

import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

console.log({ AppContext });

const App = () => {
  //dispatchでフォームの内容とtypeをreducerに渡す
  //reducer側でactionのtypeに応じて処理をし新しいstateを返す
  //useReducer(reducer, [])で取得し、[state,dispatch]第一引数stateで新しいstateを受け取る
  const [state, dispatch] = useReducer(reducer, []);

  return (
    //<AppContext.Provider value={'Hello,I am a Provider'}>
    //のように作成したcontextのproviderでDOMを挟み、valueに渡したい
    //値を持たせることで挟まれているcomponentで受け取ることができる
    <AppContext.Provider value={'Hello,I am a Provider'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
