import React from 'react';
import './App.css';
import MainPage from './pages/MainPage'
import PostsList from './pages/PostsList';
import AboutUs from './pages/AboutUs'
import { Route, Routes } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import PostDetail from './pages/PostDetail';

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/posts' element={<PostsList />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
