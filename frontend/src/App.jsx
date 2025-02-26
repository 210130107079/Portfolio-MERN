import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] gl:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App