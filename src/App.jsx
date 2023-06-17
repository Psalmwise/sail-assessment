import React, { useEffect, useState } from 'react';
import Table from './Components/Table';
import Header from './Components/Header';

const App = () => {
  const [pageHeader] = useState("RANDOM USERS");
  const [error, setError] = useState(null);
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
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen bg-blue-400">
      <Header pageHeader={pageHeader} />
      <section className='h-full border-spacing-1'>
        <Table users={users} />
      </section>
    </div>
  );
};

export default App;
