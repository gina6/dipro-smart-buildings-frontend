import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buildings from './pages/Building';
import Floor from './pages/Floor';
import Notifications from './pages/Notifications';
import PlantDetail from './pages/Plant';
import Room from './pages/Room';

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Notifications />}></Route>
            <Route path='/building' element={<Buildings />}></Route>
            <Route path='/plant' element={<PlantDetail />}></Route>
            <Route path='/floor/:floorID' element={<Floor />}></Route>
            <Route path='/room/:roomID' element={<Room />}></Route>

        </Routes>
    )
}
