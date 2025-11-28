import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]); // ✅ added navigate to dependency (best practice)

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/"); // ✅ send user back to Home instead of Login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-6 py-3 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
