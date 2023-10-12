import React from "react";
// import { useAuth } from "../../AuthContext ";

const Account = ({ userId }) => {
  // const { user } = useAuth();

  return (
    <div className="text-center mt-4">
      <h1>Account Page</h1>

      <div>
        {/* // <p>Username: {user.username}</p> */}
        <p>User ID: {userId}</p> {/* Display the userId prop */}
      </div>
    </div>
  );
};

export default Account;
