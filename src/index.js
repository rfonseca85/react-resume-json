import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Portifolio from './components/Portifolio';
import Contact from './components/Contact';

ReactDOM.render(
  <Navigation />,
  document.getElementById('navigation')
);

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <About />,
  document.getElementById('about')
);

ReactDOM.render(
  <Portifolio />,
  document.getElementById('portifolio')
);

ReactDOM.render(
  <Contact />,
  document.getElementById('contact')
);
