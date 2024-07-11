
import './App.css'
import Home from './pages/Home/Home'
import { createContext, useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Show from './components/Show/Show'

export const ThemeContext = createContext('light')

function getInitialTheme() {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}

function App() {

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <>


      <ThemeContext.Provider value={[theme, setTheme]} >
        <div className={`${theme} theme`} >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/show' element={<Show />} />
          </Routes>
        </div>
      </ThemeContext.Provider>


    </>
  )
}

export default App
