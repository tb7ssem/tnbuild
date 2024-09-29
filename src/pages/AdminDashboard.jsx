import React from 'react';
import './AdminDashboard.css'; // Ensure this file exists

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-sections">
        <div className="section">
          <h2>Manage Products</h2>
          {/* Add product management functionality */}
        </div>
        <div className="section">
          <h2>Manage Orders</h2>
          {/* Add order management functionality */}
        </div>
        <div className="section">
          <h2>Manage Customers</h2>
          {/* Add customer management functionality */}
        </div>
        <div className="section">
          <h2>Website Settings</h2>
          {/* Add website settings functionality */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;