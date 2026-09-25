import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Github from './components/Github'
import Socials from './components/Socials'
import Work from './components/Work'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black px-4 md:px-0">
        <div className='max-w-7xl mx-auto'>
           <Header/>
           <Hero/>
           <Socials/>
           <Work/>
           <Github/>
        </div>
    </div>
  )
}

export default App

