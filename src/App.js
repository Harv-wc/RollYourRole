import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Test testProp={'123'}/>
  );
}

export default App;
