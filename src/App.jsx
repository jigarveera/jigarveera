import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

// pages
const HomePage = lazy(() => import("./components/pages/HomePage"));

// loading components
import LoadingScreen from './components/ui/LoadingScreen';

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    
    </>
  )
}

export default App
