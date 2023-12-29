
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Expierence from './Components/Expierence'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Social from './Components/Social'

function App() {


  return (
    <div>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
      <Portfolio/>
      <Expierence/>
      <Contact/>
    </div>
  )
}

export default App
