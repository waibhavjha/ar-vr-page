import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Page from './components/Page';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />    
      <Page />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
