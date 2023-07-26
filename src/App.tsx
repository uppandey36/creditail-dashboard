import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/sidebar/index.tsx'
import Reports from './screens/reports/index.tsx'
import SectionTop from './components/sectionTop/index.tsx'
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Sidebar />
          <div className='main-container'>
            <SectionTop />
            <Routes>
              <Route path='/' Component={Reports} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
