import { useState } from 'react'
import axios from 'axios'

function CompleteProfile() {
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    // not sure how to send the logged in user info yet, need to ask mentor about this
    axios.put('http://localhost:5000/api/profile', {
      userId: userId,
      username: username,
      phone: phone
    })
    .then(function (res) {
      console.log(res.data)
      alert('saved! (dashboard not built yet)')
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  return (
    <div className="card">
      <h2>Complete Profile</h2>

      <form onSubmit={handleSubmit}>
        <label>User ID</label>
        <input type="text" onChange={(e) => setUserId(e.target.value)} />

        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />

        <label>Phone</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default CompleteProfile