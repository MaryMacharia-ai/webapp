import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/protected", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data.user);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch protected data");
      }
    };

    fetchProtectedData();
  }, []);

  if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-700 rounded">
        <h2 className="text-xl font-bold">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 bg-gray-100 text-gray-700 rounded">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
      <p className="text-gray-700 mb-2">
        <strong>User ID:</strong> {user.Id}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-700">
        <strong>Token issued at:</strong> {new Date(user.iat * 1000).toLocaleString()}
      </p>
      <p className="text-gray-700">
        <strong>Token expires at:</strong> {new Date(user.exp * 1000).toLocaleString()}
      </p>
    </div>
  );
};

export default Dashboard;
