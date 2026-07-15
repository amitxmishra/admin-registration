import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CompleteProfile from './pages/CompleteProfile'

function App() {
  // just using state to switch pages for now, not sure if this is right way
  // maybe should use react router? ask mentor
  const [page, setPage] = useState('home')

  return (
    <div>
      {page == 'home' && <Home setPage={setPage} />}
      {page == 'login' && <Login setPage={setPage} />}
      {page == 'signup' && <Signup setPage={setPage} />}
      {page == 'complete' && <CompleteProfile />}
    </div>
  )
}

export default App