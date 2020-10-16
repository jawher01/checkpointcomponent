import React from 'react';

import './App.css';
import ProfilPhoto from './component/profile/ProfilPhoto.js'
import FullName from './component/profile/FullName.js'
import Address from './component/profile/Address.js'


function App() {
   
  return (
    <div>
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  
  );

}

export default App;
