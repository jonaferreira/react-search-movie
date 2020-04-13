import React from 'react';
import './App.css';
import {Title} from './components/Title'
import { SearchForm } from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <SearchForm></SearchForm>      
    </div>
  );
}

export default App;
