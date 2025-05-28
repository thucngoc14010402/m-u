import React from 'react';
  import Header from './components/Header';
  import Hero from './components/Hero';
  import Services from './components/Services';
  import Tours from './components/Tours';
  import Reviews from './components/Reviews';
  import Footer from './components/Footer';

  function App() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Tours />
        <Reviews />
        <Footer />
      </div>
    );
  }

  export default App;