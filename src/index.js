import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context'
import UserStore from "./store/UserStore";
import UtilsStore from "./store/ImagesStore";

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      images: new UtilsStore(),
    }}>
      <App/>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
