import "./Users.css";

const Users = (props) => {
  return (
    <div className="users-wrapper">
      <div className="user">
        {props.users.map((user) => {
          return (
            <h3 key={user.id}>
              {user.name} ({user.age} years old)
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
