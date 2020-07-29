import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header'
import './App.css';

function App() {
  return (
    <main>
      <Header findResults={findResults} />
    </main>
  );
}

export default App;
