import React, {useState} from 'react';
import './App.css';
import MainPage from './pages/MainPage'
import PostsList from './pages/PostsList';
import AboutUs from './pages/AboutUs'
import { Route, Routes } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import PostDetail from './pages/PostDetail';
import ThemeContext  from './components/ThemeContext';

function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }


  return (
    <div>
      <ThemeContext.Provider value={{
        darkTheme,
        toggleTheme,
      }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/posts' element={<PostsList />} />
          <Route path='/posts/:id' element={<PostDetail />} />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
