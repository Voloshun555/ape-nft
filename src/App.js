import React from 'react';
import './scss/main.scss';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { MindMap } from './components/mindMap/mindMap';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <MindMap/>
    </>
  );
}

export default App;
