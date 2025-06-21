import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo ao ERP, {user?.email}</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;