import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserList from './UserList'



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

      <h1>Userss</h1>
      <UserForm addUser={addUser} />
      <UserList 
        users={users} 
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </>
  )
}

export default Users;