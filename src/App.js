import React from 'react';
import { Router } from 'react-router';
import { history } from "../src/application/history";
import Main from './application/Main';

function App() {
  return (
    <div className="app">
      <Router history={history} forceRefresh={true}>
        <Main />
      </Router>
    </div>



  );
}

export default App;
