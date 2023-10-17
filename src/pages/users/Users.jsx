import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadUsers = useLoaderData()


    return (
        <div className='max-w-7xl mx-auto'>
            <div className="overflow-x-auto">
                <Link to="/">back to Home</Link>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loadUsers.map( users => 
        <tr key={users._id}>
        <th>1</th>
        <td>{users?.name}</td>
        <td>{users?.email}</td>
        <td>Blue</td>
      </tr>
            )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;