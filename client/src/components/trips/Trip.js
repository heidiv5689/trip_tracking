import { useState } from 'react';
import TripForm from './TripForm';

const Trip = ({ id, name, duration, updateTrip, deleteTrip }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>{name}</h1>
      <p>{duration}</p>
      {/* { condition ? what happens when the condition is met : else } */}
      {
        editing ?
        <>
          <TripForm 
            id={id}
            name={name}
            duration={duration}
            updateTopic={updateTrip}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteTrip(id)}>Delete</button>
        </>
      }
    </>
  )
}

export default Trip;