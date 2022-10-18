import React from 'react';
import MobileButtomNav from './components/MobileBottomNav';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (

    <div>
      <Router>
        <AppRouter />
        <MobileButtomNav />
      </Router>


    </div>
  );
}

export default App;
