import User from './User';

const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    <h1>All Users</h1>
    { users.map( s =>
      <User
        key={s.id}
        // id={s.id} title={s.title}
        {...s}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    )}
  </>
)

export default UserList;