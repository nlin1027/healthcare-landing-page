import { useState } from 'react'
import './App.css'
import Title from './components/Title.jsx';
import Location from './components/Location.jsx';
import Team from './components/Team.jsx';
import Link from './components/Link.jsx';

function App() {
  return (
    <>
      <Title/>
      <Location/>
      <Team/>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="box1">
          <p>text box</p>
        </div>
      </div>
      <Link/>
    </>
  )
}

export default App
