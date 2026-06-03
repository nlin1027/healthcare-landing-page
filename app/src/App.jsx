import { useState } from 'react'
import './App.css'
import Title from './components/Title.jsx';
import Location from './components/Location.jsx';
import Team from './components/Team.jsx';
import Link from './components/Link.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Title/>
      <Location/>
      <Link/>
      <Footer/>
    </>
  )
}

export default App
