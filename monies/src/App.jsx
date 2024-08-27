import './index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./Components/sidebar.jsx";
import Dashboard from "./Components/dashboard.jsx";
import Navbar from "./Components/navbar.jsx";
import MyWallet from './Pages/MyWallet.jsx';
import SendMoney from './Pages/SendMoney.jsx';
import WithdrawCash from './Pages/WithdrawCash.jsx';
import Settings from './Pages/Settings.jsx';
import UserName from './Pages/UserName.jsx';
import { firestore } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import sendmoneyicons from './assets/sendmoneyicon.png';
import withdrawmoneyicon from './assets/withdrawmoneyicon.png';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [balance, setBalance] = useState(500000);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const userDoc = doc(firestore, 'users', 'yourUserId');
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        setBalance(userSnapshot.data().balance);
      } else {
        console.error('User document not found');
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const updateBalance = async (newBalance) => {
    try {
      const userDoc = doc(firestore, 'users', 'yourUserId');
      await setDoc(userDoc, { balance: newBalance }, { merge: true });
      setBalance(newBalance);
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className={`flex-1 flex flex-col ${sidebarToggle ? 'ml-0' : 'ml-64'}`}>
          <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
          <div className="flex-1 mt-16 p-4">
            <Routes>
              <Route path="/wallet" element={<MyWallet balance={balance} />} />
              <Route path="/send" element={<SendMoney balance={balance} updateBalance={updateBalance} />} />
              <Route path="/withdraw" element={<WithdrawCash balance={balance} updateBalance={updateBalance} />} />
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
