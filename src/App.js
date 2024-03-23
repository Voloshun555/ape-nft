import React from 'react';
import './scss/main.scss';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { MindMap } from './components/mindMap/mindMap';
import { Collection } from './components/collection/collection';
import { ContactUs } from './components/contactUs/contactUs';


function App() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <MindMap />
      <Collection />
      <ContactUs/>
    </>
  );
}

export default App;
