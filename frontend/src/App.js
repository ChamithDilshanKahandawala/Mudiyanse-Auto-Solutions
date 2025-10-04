
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddVehicle from './components/AddVehicle';
import Header from './components/Header';
import Footer from './components/Footer';
import VehicleList from './components/VehicleList';
import { useState } from 'react';

function App() {
  const [editVehicle, setEditVehicle] = useState(null);

  return (
   <Router>
    <Header/>
      
       <Routes>
        <Route path="/" element ={<AddVehicle editVehicle={editVehicle} setEditVehicle={setEditVehicle} />} />
        <Route path="/vehicles" element ={<VehicleList onEdit={setEditVehicle} />} />
       </Routes>
       <Footer/>
   </Router>
  );
}

export default App;
