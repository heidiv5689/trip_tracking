import { useState, useEffect } from 'react';
import axios from 'axios';
import TripForm from './TripForm';
import TripList from './TripList';

const Trips = ({ userId, userEmail }) => {
  const [trips, setTrip] = useState([])

  useEffect( () => {
    // grab all trips from backend
    axios.get(`/api/users/${userId}/trips`)
      .then( res => {
        // store them in our front end
        setTrip(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addTrip = (trip) => {
    // add a trip into our back end
    axios.post(`/api/users/${userId}/trips`, { trip })
      .then( res => {
        // add a trip to our front end
        setTrip([...trips, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateTrip = (id, trip) => {
    // update in the back end
    axios.put(`/api/users/${userId}/trips/${id}`, { trip })
      .then( res => {
        // this will update in the front end
        let newUpdatedTrip = trips.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTrip(newUpdatedTrip)
      })
      .catch( err => console.log(err) )
  }

  const deleteTrip = (id) => {
    axios.delete(`/api/users/${userId}/trips/${id}`)
      .then( res => setTrip(trips.filter( t => t.id !== id)))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>{userEmail}'s Trips</h1>
      <TripForm addTrip={addTrip} />
      <TripList
        trips={trips}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    </>
  )
}

export default Trips;