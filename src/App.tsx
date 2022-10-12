import React from 'react';
import './App.css';
import MobileButtomNav from './components/MobileBottomNav';
import AppRouter from './components/AppRouter';

function App() {

  return (

    <div>
      <AppRouter />
      <MobileButtomNav />
    </div>
  );
}

export default App;
