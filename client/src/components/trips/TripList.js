import Trip from './Trip';

const TripList = ({ trips, updateTrip, deleteTrip }) => (
  <>
    <h3>All Topics</h3>
    { trips.map( t => 
      <Trip
        key={t.id} 
        {...t}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      /> 
    )}
  </>
)

export default TripList;