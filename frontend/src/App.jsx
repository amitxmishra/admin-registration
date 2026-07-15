import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      {page == 'home' && <Home setPage={setPage} />}
      {page == 'login' && <Login setPage={setPage} />}
      {page == 'signup' && <Signup setPage={setPage} />}
    </div>
  )
}

export default App