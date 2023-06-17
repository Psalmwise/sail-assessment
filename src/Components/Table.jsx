import React, { useState, useEffect } from 'react';

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-600 '>
      <table className='bg-pink-100 p-10'>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Street</th>
          </tr>
        </thead>
        <tbody className='bg-grey-100'>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
