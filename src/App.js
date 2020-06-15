import React from 'react';

/* */
import Header from './components/header/Header'
import SelectTap from './components/selectTap/SelectTap';
import CenterContainer from './components/containers/CenterContainer';
import Rules from './components/rules/Rules';
function App() {
  return (
    <div className="main">
      <CenterContainer>
        <Header/>
        <br/>
        <SelectTap/>
        <Rules/>
      </CenterContainer>
    </div>
  );
}

export default App;
