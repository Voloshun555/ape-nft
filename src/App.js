import React from 'react';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { MindMap } from './components/mindMap/mindMap';
import { Collection } from './components/collection/collection';
import { ContactUs } from './components/contactUs/contactUs';
import { Footer } from './components/footer/footer';
import { Faq } from './components/faq/faq';

import './scss/main.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Collection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
