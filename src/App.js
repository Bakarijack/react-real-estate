import './App.css';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Home from './components/Home';
import Property from './components/Property';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Property/>
    </Fragment>
  );
}

export default App;
