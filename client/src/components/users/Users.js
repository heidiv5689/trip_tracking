import { useState, useEffect } from 'react';
import axios from 'axios';
// import UserForm from './UserForm';
import User from './User';
import UserNew from './UserNew';


const Users = ({}) => {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get('/api/users')
      .then( res => setUsers(res.data))
      .catch( err => console.log(err) )
  }, [])

 
  const addUser = (user) => {

    axios.post('/api/users', { user })
      .then( res => setUsers([...users, res.data ]))
      .catch( err => console.log(err) )
  }

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
      .then( res => {
        const newUpdatedUsers = users.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setUsers(newUpdatedUsers)
      })
      .catch( err => console.log(err) )
  }

  const deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
      .then( res => setUsers(users.filter( s => s.id !== id)))
      .catch( err => console.log(err) )
  }

  return (
    <>

      <h1>Users</h1>
      <UserNew addUser={addUser}/>
     
      { users.map( s => (
       <User key={s.id} {...s} updateUser={updateUser} deleteUser={deleteUser}/>
      ))
      }
      
    </>
  )
}

export default Users;