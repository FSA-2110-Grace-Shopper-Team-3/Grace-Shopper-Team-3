import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './Routes';
import AdminSideBar from './components/Admin/AdminSideBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
