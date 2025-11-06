import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/homepage/HomePage'
import DetailPage from './pages/detailpage/DetailPage'

import './App.css'
import { DefaultProvider } from './context/DefaultContext'

function App() {
  return (
    <>
      <DefaultProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/detailpage/:id" element={<DetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DefaultProvider>
    </>
  )
}

export default App
