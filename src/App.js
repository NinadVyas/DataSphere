import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Data1 from './components/Data1';
import Shpere from './components/Shpere';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Shpere/>

      <Data1/>
      <Cards />

      <Footer />
      
    </div>
  );
}

export default App;
