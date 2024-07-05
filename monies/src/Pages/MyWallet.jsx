// Pages/MyWallet.jsx
import React from 'react';

import {  FaPaperPlane, FaSearch, FaMoneyBillWave } from 'react-icons/fa';

const MyWallet = () => {

  
  return (
  
  
    <div className='flex flex-col justify-center mb-5 '>
      <h1 className='text-black text-lg'>My Wallet</h1>
      <h2>Keep track of your financial plan</h2>
      <div className='flex mt-3'>
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2 border border-gray-300 ">
      <p className=" text-black text-lg  mb-4 font-bold">Hi User Name!</p>
      <p className=" text-black text-lg">Ksh. 130,543</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md w-1/4 border border-gray-300">
      <FaPaperPlane/>
      <p className=" text-black text-lg  mb-4">Send Money</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md w-1/4 border border-gray-300">
      <FaMoneyBillWave/>
      <p className=" text-black text-lg  mb-4">Withdraw Cash</p>
    </div>
    </div>
    
    <div className='w-1/2 mt-2'>
      <label className='text-black text-lg ml-2 font-bold '>Recent Transactions</label>
      <input
            
            className="border border-gray-400 p-2 rounded-full ml-8 "
            placeholder="Search"
          />
          <button className='rounded-full bg-purple-700 w-6 h-6 ml-4 text-white'>
            <FaSearch/>
          </button>
          
    </div>
    
 
    
    <form>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray'>
              Transaction ID

            </th>
          </tr>

          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray'>
              Name

            </th>
          </tr>

          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray'>
              Date

            </th>
          </tr>

          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray'>
              Status

            </th>
          </tr>

          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray'>
              Amount

            </th>
          </tr>

        </thead>

      </table>
    </form>
    </div>

 

  

  
  
  
 
    );
  };


export default MyWallet;
