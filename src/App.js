import './App.css';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Home from './components/Home';
import Property from './components/Property';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Property/>
      <Services/>
      <Work/>
    </Fragment>
  );
}

export default App;
