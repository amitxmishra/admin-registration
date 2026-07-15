import { useState } from 'react'
import axios from 'axios'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

 async function handleLogin(e) {
  try{
      e.preventDefault()

   const res = await axios.post('http://localhost:5000/api/login', { email, password })
        setToken(res.data.token)
        setError('')
        fetchUsers(res.data.token)
        console.log("login",res);
        
  }catch(err){
     console.log(err)
        setError('Login failed. Check email/password.')
  }   
  }




  async function  fetchUsers (authToken) {
try{
  const res=await axios.get('http://localhost:5000/api/admin/users', {
      headers: { Authorization: `Bearer ${authToken}` }
    })

    console.log("res",res)
    setUsers(res.data)
}catch(err){
 console.log(err)
        setError('Failed to load users. Are you an admin?')
}
  }





  if (!token) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Registered Users</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Admin?</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.isAdmin ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App