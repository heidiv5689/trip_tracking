import { useState, useEffect } from 'react';


const UserForm = ({ addUser, id, setEdit, updateUser, email, password }) => {
  const [user, setUser] = useState({ email: '', password: '' })


  useEffect( () => {
    if (id) {
     
      setUser({ email, password })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
   
      updateUser(id, user) 
      setEdit(false) 
    } else {
     
      addUser(user) 
    }
   
    setUser({ email: ''})
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Add' } User Form</h1>
      <form onSubmit={handleSubmit}>
        <label>User:</label>
        <input 
        
          name='email' 
          value={user.email}
          
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        
          placeholder='user'
        />

        <label>Password:</label>
        <input 
          
          name='password' 
          value={user.password}
          
          onChange={(e) => setUser({ ...user, password: e.target.value })}
         
          placeholder='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserForm;