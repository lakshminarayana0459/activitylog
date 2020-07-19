import React from 'react';
import { store } from '../src/application/helper/store';
import {getRoutes} from '../src/application/routes/Routes';
import Layout from '../src/application/layout/Layout';

function App() {
  return (
    <div>
      { getRoutes(store) }
    </div>
       
    
  );
}

export default App;
