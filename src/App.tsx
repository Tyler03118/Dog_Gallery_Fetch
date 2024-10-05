import { useState } from 'react'
import './App.css'
import BreedSelector from './components/BreedSelector'
import Gallery from './components/Gallery'
import logo from './assets/logo.png'

function App() {
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const handleSelectBreeds = (breeds: string[]) => {
    setSelectedBreeds(breeds)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode', !darkMode)
  }

  return (
    <>
      <header>
        <div className="header-left">
          <img src={logo} alt="Fetch Logo" className="header-logo" />
          <h1 className="header-title">ZIJI's DOG GALLERY</h1>
        </div>
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <BreedSelector onSelectBreeds={handleSelectBreeds} />

      <main>
        <Gallery selectedBreeds={selectedBreeds} isDarkMode={darkMode} />
      </main>

      <footer>
        <p className="read-the-docs">
          Powered by the <a href="https://dog.ceo/dog-api/">Dog API 🤖</a>
        </p>
      </footer>
    </>
  )
}

export default App