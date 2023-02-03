import React from 'react';
import FormInput from './componentes/FormInput';
import List from './componentes/List';
import Contador from './componentes/Contador';
import {DataProvider} from './componentes/DataProvider';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <h1>To-do list</h1>

     <FormInput/>
     <Contador/>
     <List/>


    </div>

    </DataProvider>

    
  );
}

export default App;
