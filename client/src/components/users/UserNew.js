import { useState } from 'react';


const UserNew = ({ addUser }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='User'
          type='text'
          name='user'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          placeholder='password'
          type='text'
          name='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
       
        <button className="btn btn-secondary" type='submit'>Add</button>
      </form>
    </>
  )
}

export default UserNew;