import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/homepage/HomePage'
import DetailPage from './pages/detailpage/DetailPage'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/detailpage/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
