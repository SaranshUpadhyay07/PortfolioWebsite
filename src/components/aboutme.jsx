import Hero from './hero.jsx'
import Socials from './socials.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Journey from './journey.jsx'
import Portfolio from './portfolio.jsx';

function AboutMe() {
  return (
    <div className="pb-5">
      <Hero />
      <Socials />
      <About />
      <Skills />
      <Portfolio />
      <Journey />
    </div>
  )
}

export default AboutMe