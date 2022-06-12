import { useState } from 'react';
import UserForm from './UserForm';
import Trips from '../trips/Trips';
import { Link } from 'react-router-dom';

const User = ({id, email, password, updateUser, deleteUser}) => {
  const [editing, setEdit] = useState(false)

  return (
    <div className="border border-secondary rounded">
      <h1></h1>

      <div >
      <h1>user # :{id} Email: {email}</h1>
      <h5>{password}</h5>
      </div>
      
      
      
      { editing ?
        <>
          <UserForm 
            id={id}
            email={email}
            password={password}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteUser(id)}>Delete</button>
          {/* <Trips userId={id} userEmail={email}/> */}
          <br></br>
          <Link
          to={`/${id}/trips`}
          state={{ userId: id, userEmail: email}}
          >
            Trips
          </Link>
        </>
      }


    </div>
  )
}

export default User;