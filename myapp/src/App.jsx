import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/about/About'
import Skill from './component/skill/Skill'
import Archivment from './component/acrivment/Archivment'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'




function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Archivment/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App