import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buildings from './pages/Building';
import Notifications from './pages/Notifications';
import PlantDetail from './pages/PlantDetail';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/notifications' element={<Notifications />}></Route>
                <Route path='/building' element={<Buildings />}></Route>
                <Route path='/plant-detail' element={<PlantDetail />}></Route>
            </Routes>
        </Router>
    )
}
