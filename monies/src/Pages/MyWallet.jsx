import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { FaSearch } from 'react-icons/fa';
import sendmoneyicon from '../assets/sendmoneyicon.png';
import withdrawmoneyicon from '../assets/withdrawmoneyicon.png';

const MyWallet = ({ balance }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsCollection = collection(firestore, 'transactions');
        const querySnapshot = await getDocs(transactionsCollection);
        
        const transactionsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()  // Ensure this matches your Firestore document structure
        }));

        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className='flex flex-col justify-center mb-5'>
      <h1 className='text-black text-lg font-bold'>My Wallet</h1>
      <h2>Keep track of your financial plan</h2>
      
      <div className='flex mt-3'>
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2 border border-gray-300">
          <p className="text-black text-lg mb-4 font-bold">👋Hi Andrew!</p>
          <p className="text-black text-lg">Ksh. {balance}</p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-1/4 border border-gray-300">
          <div className='flex justify-center items-center'>
            <img src={sendmoneyicon} alt="send money icon" className='w-9 h-9'/>
          </div>
          <p className="text-black text-lg ">Send Money</p>
        </div>
        
        <div className=" flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-1/4 border border-gray-300">
          <div className='flex justify-center items-center'>
            <img src={withdrawmoneyicon} alt="withdraw icon" className='w-8 h-10'/>
          </div>
          <p className="text-black text-lg ">Withdraw Cash</p>
        </div>
      </div>
      
      <div className='w-1/2 mt-2 flex items-center'>
        <label className='text-black text-lg ml-2 font-bold'>Recent Transactions</label>
        <div className='flex items-center'>
          <input
            className="border border-gray-400 p-2 rounded-full ml-8"
            placeholder="Search"
          />
          <button className='rounded-full bg-purple-700 p-2 ml-4 text-white flex items-center justify-center'>
            <FaSearch className='w-4 h-4' />
          </button>
        </div>
      </div>
      
      <div className='flex'>
        <form className='w-full'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-black'>
                  Transaction ID
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Account No
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Name
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.accountNo}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.name}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    {new Date(transaction.timestamp.seconds * 1000).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default MyWallet;
