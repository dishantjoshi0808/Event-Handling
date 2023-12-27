import React, { useState } from "react";

function ConditionalRenderingExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Logout  </h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2> Login  Pages</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default ConditionalRenderingExample;
