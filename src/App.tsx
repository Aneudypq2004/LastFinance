import { Route, Routes, BrowserRouter } from 'react-router-dom'

// PAGES
import NotFound from './Pages/NotFound'
import ProctectedRoutes from './Layout/ProctectedRoutes'
import Index from './Pages/Index'
import Settings from './Pages/Settings'
import CardsPage from './Pages/Card'
import Wallet from './Pages/Wallet'

import { ToastContainer } from 'react-toastify'
// PROVIDER

import { CriptoProvider } from './context/CriptoProvider'
import { UserProvider } from './context/UserProvider'


function App() {

  return (
    // DEFINE ROUTES 

    <BrowserRouter>
      <UserProvider>

        <CriptoProvider>

          <Routes>

            {/* DASHBOARD ROUTING  */}

            <Route path='/' Component={ProctectedRoutes}>

              {/* <Route index Component={Index} /> */}

              <Route index Component={Wallet} />

              <Route path='/cards' Component={CardsPage} />

              <Route path='/settings' Component={Settings} />

              <Route path='*' Component={NotFound} />

            </Route>

            {/*  ERROR PAGGE  */}

          </Routes>
        </CriptoProvider>
      </UserProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
