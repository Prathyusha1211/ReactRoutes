//import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch along with other components

import { Home } from './components/Home';
import { Department } from './components/Department';
import { Employee } from './components/Employee';
import {Navigation} from './components/Navigation';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <h3 className='m-3 d-flex justify-content-center'>React Js with Web API Demo</h3>
        <h5 className='m-3 d-flex justify-content-center'>Employee Management Portal</h5>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/department' element={<Department/>} />
          <Route path='/employee' element={<Employee/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
