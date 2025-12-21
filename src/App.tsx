import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
        <div className='max-w-7xl mx-auto px-6'>
   <Header/>
   <Hero/>
   <Body/>
   </div>
    </div>
   
  )
}

export default App
