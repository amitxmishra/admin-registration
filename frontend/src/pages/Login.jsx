import { useState } from 'react'
import axios from 'axios'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:5000/api/login', {
      email: email,
      password: password
    })
    .then(function (res) {
      console.log(res.data)
      setSuccess(true)
      setError('')
    })
    .catch(function (err) {
      console.log(err)
      setError('login failed, check console')
    })
  }

  if (success) {
    return (
      <div className="card">
        <h2>Login Successful</h2>
        <p>Welcome back!</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>Login</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>

      <p onClick={() => props.setPage('signup')}>New user? Sign up</p>
    </div>
  )
}

export default Login