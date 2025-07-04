import { Routes, Route } from "react-router-dom"
import Header from './header.jsx'
import Footer from './footer.jsx'
import Home from './home.jsx' // You’ll create this next
import AboutMe from './aboutme.jsx'
import Projects from './projects.jsx'
import Blog from './blog.jsx'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App