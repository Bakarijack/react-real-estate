import './App.css';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Home from './components/Home';
import Property from './components/Property';
import Services from './components/Services';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Property/>
      <Services/>
    </Fragment>
  );
}

export default App;
