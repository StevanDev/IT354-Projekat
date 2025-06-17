import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MovieProvider from './context/MovieContext'
import Movie from './pages/Movie/Movie'
import UpdateMovie from './pages/Movie/UpdateMovie'
import CreateMovie from './pages/Movie/CreateMovie'
import AuthProvider from './context/AuthContext'
import Protected from './layout/Protected'

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' Component={NotFound} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route element={<Protected reqRoles={["admin", "regular"]} />}>
              <Route path='/' Component={Home} />
              <Route path='/movies/:id' Component={Movie} />
            </Route>
            <Route element={<Protected reqRoles={["admin"]} />}>
              <Route path='/movies/:id/update' Component={UpdateMovie} />
              <Route path='/movies/create' Component={CreateMovie} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </AuthProvider>
  )
}

export default App
