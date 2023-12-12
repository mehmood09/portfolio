//import reactLogo from "./assets/react.svg";
//import Layout from "./layout/Layout";
import './App.css';

import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Hero from './components/UI/Hero';
import Footer from "./components/Footer/Footer";
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import { CardFlip } from './components/UI/CardFlip';
import Contact from './components/UI/Contact'

function App() {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
   <>
  <Header/>
  <main>
  <Hero />
  <Portfolio />
  <Services />
  <Contact />
  </main>
  <Footer/>
   </>
  );
}
export default App;
