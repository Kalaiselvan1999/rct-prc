import React from "react";
import './user.css'

const userData = [
  {
    id: 1,
    name: "kalai",
    age: 25,
    car: "BMW",
  },
  {
    id: 2,
    name: "Aravind",
    age: 23,
    car: "Lamborghini",
  },
  {
    id: 3,
    name: "Naveen",
    age: 25,
    car: "Audi",
  },
];

function User() {
  return (
    <div className="user">
      <table className="usertable">
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>Car</th>
        </tr>
        <tbody>
          {userData.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.car}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
