import React from 'react';
import './App.css';
import MobileButtomNav from './components/MobileBottomNav';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (

    <div className='mt-5'>
      <Router>
        <AppRouter />
        <MobileButtomNav />
      </Router>


    </div>
  );
}

export default App;
