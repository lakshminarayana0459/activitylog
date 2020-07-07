import React from 'react';
import { store } from '../src/application/helper/store';
import {getRoutes} from '../src/application/routes/Routes';

function App() {
  return (
    <div>
      { getRoutes(store) }
    </div>
       
    
  );
}

export default App;
