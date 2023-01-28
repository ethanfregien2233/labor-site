import React from 'react'
import './styles/tailwind.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Farm from './components/Farm';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Harvesting from './components/Harvesting';
import Placeholder from './components/Placeholder';
function App() {
  return (
    <div className='text-inter'>
    <Header/>
    <Hero/> 
    <Farm />
    <Harvesting />
    <Placeholder />
    <Contact/>
    <Footer />
    </div>
  )
}

export default App;