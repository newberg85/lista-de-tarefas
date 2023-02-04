import React from 'react';
import HeaderElementer from './componentes/HeaderElementer';
import FormInput from './componentes/FormInput';
import List from './componentes/List';
import Contador from './componentes/Contador';
import {DataProvider} from './componentes/DataProvider';

function App() {
  return (

    <DataProvider>
    <HeaderElementer/>
    <div className="App flex items-center flex-col">
     <FormInput/>
     <Contador/>
     <List/>


    </div>

    </DataProvider>

    
  );
}

export default App;
