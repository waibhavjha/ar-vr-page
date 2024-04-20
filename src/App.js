import React from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';
import HomePage from './components/HomePage';
import Properties from './components/Properties';
import Location from './components/Location';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Page />
      <HomePage />
      <Properties />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
