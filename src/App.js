import React from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Page />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
