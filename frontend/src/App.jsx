
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header/>
        <Routes>
          <Route path="/" exact component={MainContent} />
          <Route path="/login" component={Login} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



