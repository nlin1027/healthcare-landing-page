import { useState } from 'react'
import './App.css'
import Bar from './components/Bar.jsx';
import Title from './components/Title.jsx';
import Location from './components/Location.jsx';
import Team from './components/Team.jsx';
import Link from './components/Link.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Bar/>
      <Title/>
      <Location/>
      <Link/>
      <Footer/>
    </>
  )
}

export default App
