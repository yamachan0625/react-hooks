import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';

import Event from './Event';
import reducer from '../reducers';

const App = () => {
  //dispatchでフォームの内容とtypeをreducerに渡す
  //reducer側でactionのtypeに応じて処理をし新しいstateを返す
  //useReducer(reducer, [])で取得し、[state,dispatch]第一引数stateで新しいstateを受け取る
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
