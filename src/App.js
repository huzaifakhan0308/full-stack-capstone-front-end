import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyReservations from './pages/MyReservations';
import AddReservation from './components/Reservations/AddReservation';
import NavbarPC from './components/NavbarPC';
import './App.css';
import MobNav from './components/MobNav';

function App() {
  return (
    <div className="App">
      <MobNav />
      <NavbarPC />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Home />} />
          <Route path="add_reservation/" element={<AddReservation />} />
          <Route path="my_reservations/" element={<MyReservations />} />
          <Route path="/delete" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
