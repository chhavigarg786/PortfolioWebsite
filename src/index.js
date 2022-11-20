import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header';
import App from './App';
import Nav from './components/nav/nav.jsx';
import About from './components/about/about';
import Experience from './components/experience/experience';
 import Services from './components/services/services';
 import Portfolio from './components/portfolio/portfolio';
 import Testimonials from './components/testimonials/testimonials';
 import Contact from './components/contact/contact';
 import Footer from './components/footer/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Nav/>
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
