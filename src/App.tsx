import React from 'react';
import './App.css';
import { useApiGet } from "./hook/useApiHook";
import { Floors } from "./hook/dataInterfaces";
import MobileButtomNav from './components/MobileBottomNav';
import AppRouter from './components/AppRouter';

function App() {

  const floors = useApiGet<Floors>('http://localhost:3000/floors');
  if (!floors.loading) console.log(floors);

  return (

    <div>
      <AppRouter />
      <MobileButtomNav />
    </div>
  );
}

export default App;
