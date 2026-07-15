import { useState } from 'react'
import axios from 'axios'

function Signup(props) {
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:5000/api/signup', {
      userId: userId,
      username: username,
      email: email,
      phone: phone,
      password: password
    })
    .then(function (res) {
      console.log(res.data)
      window.location.href = 'http://localhost:5175'
    })
    .catch(function (err) {
      console.log(err)
      setError('signup failed, check console')
    })
  }

  return (
    <div className="card">
      <h2>Sign Up</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>User ID</label>
        <input type="text" onChange={(e) => setUserId(e.target.value)} />

        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />

        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label>Phone</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Sign Up</button>
      </form>

      <p onClick={() => props.setPage('login')}>Already have account? Login</p>
    </div>
  )
}

export default Signup