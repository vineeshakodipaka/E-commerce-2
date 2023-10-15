import React from "react";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext "; // Import your AuthContext

const Account = () => {
  //const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth(); // Use the logout function and isAuthenticated from your AuthContext
  const userId = Cookies.get("userId"); // Get the user ID from cookies

  const handleLogout = () => {
    // Remove the user ID cookie and log the user out
    Cookies.remove("userId");
    logout();
  };

  console.log("IsAuthenticated:", isAuthenticated);
  console.log("User ID:", userId);

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
