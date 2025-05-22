import './App.css'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">ReactApp</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Docs</a>
            <a href="#">About</a>
          </div>
        </nav>
      </header>
      
      <main>
        <LandingPage />
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
