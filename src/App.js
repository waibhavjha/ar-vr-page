import React from 'react';
import Navbar from './components/Navbar';
import HPage from './components/HPage';
//import HomePage2 from './components/HomePage2';
import Search from './components/Search';
import LuxuryApartment from './components/LuxuryApartment';
import Page from './components/Page';
import Properties from './components/Properties';
import Location from './components/Location';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HPage />
      <Search />
      <LuxuryApartment />
      <Page />
      <Properties />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
