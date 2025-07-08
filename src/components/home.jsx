import Hero from './hero.jsx'
import Socials from './socials.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Journey from './journey.jsx'
import Portfolio from './portfolio.jsx'
import ProjectSlider from './projectslider.jsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Bootstrap-style jumbotron */}
      <div className="jumbotron text-center different-section top-container container-lg  home-circle mb-5">
        <h1 className="display-6">Hello, world!</h1>
        <p>
          This is a simple hero unit, a jumbotron-style component for highlighting content.
        </p>
        <hr className="my-4" />
        <Link className="btn btn-primary btn-lg" to="/about" role="button">
          Learn more
        </Link>
      </div>
      <div>
        <ProjectSlider/>
      </div>
    </>
  )
}

export default Home
