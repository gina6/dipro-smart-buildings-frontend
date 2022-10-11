import React from 'react';
import './App.css';
import { useApiGet } from "./hook/useApiHook";
import { Floors } from "./hook/dataInterfaces";
import MobileButtomNav from './components/MobileBottomNav'

function App() {

  const floors = useApiGet<Floors>('http://localhost:3000/floors');
  if (!floors.loading) console.log(floors);

  return (
    <div>

      <MobileButtomNav />
    </div>
  );
}

export default App;
