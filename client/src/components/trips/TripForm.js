import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, name, duration, updateTrip, setEdit }) => {
  const [trip, setTrip] = useState({ name: '', duration: '' })

  useEffect( () => {
    if (id) {
      setTrip({ name, duration })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTrip(id, trip)
      setEdit(false)
    } else {
      addTrip(trip)
    }
    setTrip({ name: '', duration: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create '} trip</h1>
      <form onSubmit={handleSubmit}>
        <label>Trip:</label>
        <input
          name='name'
          value={trip.name}
          onChange={(e) => setTrip({...trip, name: e.target.value })} 

          required
          placeholder='Trip Name'
        />
        <label>Description</label>
        <textarea
          name='duration'
          value={trip.duration}
          onChange={(e) => setTrip({...trip, duration: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;