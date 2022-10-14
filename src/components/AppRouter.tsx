import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buildings from './pages/Building';
import Floor from './pages/Floor';
import Notifications from './pages/Notifications';
import PlantDetail from './pages/Plant';
import Room from './pages/Room';

export default function AppRouter() {
    return (
        <div className='m-5'>

            <Routes>
                <Route path='/' element={<Notifications />}></Route>
                <Route path='/floors' element={<Buildings />}></Route>
                <Route path='/rooms/:roomID/:plantID' element={<PlantDetail />}></Route>
                <Route path='/floors/:floorID' element={<Floor />}></Route>
                <Route path='/rooms/:roomID' element={<Room />}></Route>

            </Routes>
        </div>
    )
}
