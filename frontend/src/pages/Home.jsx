function Home(props) {
  return (
    <div className="card">
      <h1>Admin Portal</h1>
      <button onClick={() => props.setPage('login')}>Login</button>
      <br />
      <button onClick={() => props.setPage('signup')}>Sign Up</button>
    </div>
  )
}

export default Home