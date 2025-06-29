import { useState } from 'react'
import Header from './header.jsx'
import Hero from './hero.jsx'
import Socials from './socials.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Footer from './footer.jsx'
import Projects from './projects.jsx'
import Journey from './journey.jsx'
import Portfolio from './portfolio.jsx'
// import Section from './Section.jsx'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Socials />
      <About />
      <Skills />
      <Portfolio/>
      <Journey />
      <Footer />
    </div>
  )
}

export default App
