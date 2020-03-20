import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';

import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const APP_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : { events: [], operationLogs: [] };
  //dispatchでフォームの内容とtypeをreducerに渡す
  //reducer側でactionのtypeに応じて処理をし新しいstateを返す
  //useReducer(reducer, [])で取得し、[state,dispatch]第一引数stateで新しいstateを受け取る
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    //<AppContext.Provider value={'Hello,I am a Provider'}>
    //のように作成したcontextのproviderでDOMを挟み、valueに渡したい
    //値を持たせることで挟まれているcomponentで受け取ることができる
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
