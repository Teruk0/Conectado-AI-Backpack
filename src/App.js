import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import Editprofile from './pages/Editprofile';
import Network from './pages/Network';
import Navbar from './components/Navbar/Navbar'; 
import BackPack from './pages/Backpack';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Community" element={<Community />} />
        <Route path="/BackPack" element={<BackPack />} />
        <Route path="/Editprofile" element={<Editprofile />} />
        <Route path="/Network" element={<Network />} />  
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;