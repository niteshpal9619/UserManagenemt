import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './component/Header';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
          <ToastContainer position="top-center"></ToastContainer>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/add" element={<AddEdit />}/>
            <Route path="/update/:id" element={<AddEdit />}/>
            <Route path="/view/:id" element={<View />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
      </div>
    </Router> 
  );
}

export default App;
