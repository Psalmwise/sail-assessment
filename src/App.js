import React, { UserInfo } from 'react';
import UserInfo from './UserInfo/UserInfo';

const UserInfo = () => {
  const [users, UserInfo] = useState([
    {
      firstname: 'Olamide',
      lastname: 'Baddo',
      email: 'johndoe@example.com',
      phone: '000-000-0000'
    },
    {
      firstname: 'Ololade',
      lastname: 'Asake',
      email: 'seyivibe@gmail.com',
      phone: '000-000-0000'
    },
    {
      firstname: 'Tiwa',
      lastname: 'Savage',
      email: 'tiwasavage@gmail.com',
      phone: '000-000-0000'
    },
    {
      firstname: 'John',
      lastname: 'Vibe',
      email: 'seyivibe@gmail.com',
      phone: '000-000-0000'
    },
    {
      firstname: 'Ope',
      lastname: 'Oluwa',
      email: 'opeoluwa@gmail.com',
      phone: '000-000-0000'
    },
  ]);
  return (
    <div className="app">
      <h1>On God</h1>
      <div className="sail-student">
        {users.map(user => (
          <UserInfo
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
};
export default UserInfo;