import Hero from './hero.jsx'
import Socials from './socials.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Journey from './journey.jsx'
import Portfolio from './portfolio.jsx'

function Home() {
  return (
    <>
      {/* Bootstrap-style jumbotron */}
      <div className="jumbotron text-center different-section py-5 my-5 top-container container-lg px-lg-5">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a jumbotron-style component for highlighting content.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content out within the container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </>
  )
}

export default Home
