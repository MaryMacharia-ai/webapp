// src/components/common/AuthButtons.jsx
import React, { useState } from "react";

function AuthButtons() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignUp = () => setIsAuthenticated(true);
  const handleSignIn = () => setIsAuthenticated(true);
  const handleSignOut = () => setIsAuthenticated(false);

  return (
    <div className="w-full flex justify-center gap-4">
      {!isAuthenticated ? (
        <>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
          <button className="px-4 py-2 rounded-md bg-green-600 text-white">Sign In</button>
        </>
      ) : (
        <button className="px-4 py-2 rounded-md bg-red-600 text-white">Sign Out</button>
      )}
    </div>
  );
}

export default AuthButtons;