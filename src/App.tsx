import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Github from './components/Github'
import Socials from './components/Socials'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
        <div className='max-w-7xl mx-auto '>
   <Header/>
   <Hero/>
   <Socials/>
   <Github/>
   </div>
    </div>
   
  )
}

export default App
