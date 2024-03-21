import React from 'react';
import './scss/main.scss';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <About/>
    </>
  );
}

export default App;
