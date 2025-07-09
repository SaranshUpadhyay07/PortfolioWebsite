import Hero from './hero.jsx'
import Socials from './socials.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Journey from './journey.jsx'
import Portfolio from './portfolio.jsx'
import ProjectSlider from './projectslider.jsx'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
 
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'One', // Types 'One'
        2000, // Waits 1s
        'Two', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Two Three',
        2000, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.3em', display: 'inline-block' }}
    />
  );
};

function Home() {
  return (
    <>
      {/* Bootstrap-style jumbotron */}
      <div className="jumbotron text-center different-section top-container container-lg  home-circle mb-5">
        <h1 className="display-6">Hello, world!</h1>
        <ExampleComponent />
        <hr className="my-4" />
        <div class="d-flex justify-content-center mb-4 social-icons">
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
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
