import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetail;