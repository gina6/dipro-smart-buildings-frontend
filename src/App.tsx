import React from "react";
import MobileBottomNav from "./components/UI/MobileBottomNav";
import AppRouter from "./components/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <AppRouter />
        <MobileBottomNav />
      </Router>
    </div>
  );
}

export default App;
