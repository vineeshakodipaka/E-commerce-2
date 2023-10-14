import React from "react";
import Cookies from "js-cookie"; // Import js-cookie
import { useNavigate } from "react-router-dom";

const Account = ({ userId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user ID from cookies
    Cookies.remove("userId");
    // Redirect the user to the home page after logging out
    navigate("/");
  };

  return (
    <div className="text-center mt-4">
      <h1>Account Page</h1>
      <div>
        <p>User ID: {userId}</p>
      </div>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Account;
