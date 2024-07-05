import React from 'react';
import { FaMoneyBillWave, FaPaperPlane, FaWallet, FaCog, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2 flex flex-col justify-between`}>
      <div>
        <div className='my-2 mb-4'>
          <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/wallet" className='px-3'>
              <FaWallet className='inline-block w-6 h-6 mr-2 -mt-1' />
              MyWallet
            </Link>
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/send" className='px-3'>
              <FaPaperPlane className='inline-block w-6 h-6 mr-2 -mt-1' />
              SendMoney
            </Link>
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/withdraw" className='px-3'>
              <FaMoneyBillWave className='inline-block w-6 h-6 mr-2 -mt-1' />
              WithdrawCash
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='mt-auto text-white font-bold'>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/settings" className='px-3'>
              <FaCog className='inline-block w-6 h-6 mr-2 -mt-1' />
              Settings
            </Link>
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/username" className='px-3'>
              <FaUser className='inline-block w-6 h-6 mr-2 -mt-1' />
              Mr Andrew
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
