import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('TOKEN');
    navigate('/');
  }, []);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
