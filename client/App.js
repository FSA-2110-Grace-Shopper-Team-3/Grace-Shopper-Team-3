import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './Routes';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <div>
      <ScrollToTop smooth />
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
