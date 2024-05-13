import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Schemeee from './pages/Schemeee';
import NGOs from './pages/NGOs';
import Contact from './pages/Contact';
import About from './pages/About';
import LostChildren from './pages/LostChildren';
import AddUser from './pages/AddUser';
import SearchChildByName from './pages/SearchChildByName';
import ViewChildDetails from './pages/ViewChildDetails';
import EditChildren from './pages/EditChildren';
import FAQ from './pages/FAQ';
import Rules from './pages/Rules';
import Programme from './pages/Programme';


function App() {
  return (
    <div className="App">
      <Router> {/* Wrap everything with Router */}
        <Nav /> {/* Render Nav within Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schemes" element={<Schemeee />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/lostchild" element={<LostChildren />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/schemes" element={<Schemeee/>} />
          <Route path="/programme" element={<Programme/>} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/searchbyname" element={<SearchChildByName />} />
          
          <Route path="/editchildren/:id" element={<EditChildren />} />
          
          <Route path="/viewchilddetail/:name" element={<ViewChildDetails />} />

         
        </Routes>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
