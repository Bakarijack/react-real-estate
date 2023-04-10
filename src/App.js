import './App.css';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Home from './components/Home';
import Property from './components/Property';
import Services from './components/Services';
import Work from './components/Work';
import Accordion from './components/Accordion';
import Counter from './components/Counter';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Property/>
      <Services/>
      <Work/>
      <Accordion/>
      <Counter/>
    </Fragment>
  );
}

export default App;
