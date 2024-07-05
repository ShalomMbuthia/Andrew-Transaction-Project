import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./Components/sidebar.jsx";
import Dashboard from "./Components/dashboard.jsx";
import Navbar from "./Components/navbar.jsx";
import MyWallet from './Pages/MyWallet.jsx';
import SendMoney from './Pages/SendMoney.jsx';
import WithdrawCash from './Pages/WithdrawCash.jsx';
import Settings from './Pages/Settings.jsx';
import UserName from './Pages/UserName.jsx';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <Router>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className={`flex-1 flex flex-col ${sidebarToggle ? 'ml-0' : 'ml-64'}`}>
          <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
          <div className="flex-1 mt-16 p-4"> {/* Adjusted margin top to ensure space for Navbar */}
            <Routes>
              <Route path="/wallet" element={<MyWallet />} />
              <Route path="/send" element={<SendMoney />} />
              <Route path="/withdraw" element={<WithdrawCash />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/username" element={<UserName />} />
              <Route path="/" element={<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
