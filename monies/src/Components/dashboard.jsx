import React from 'react';

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      {/* Content of Dashboard */}
    </div>
  );
}

export default Dashboard;
