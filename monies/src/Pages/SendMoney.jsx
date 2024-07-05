import React, { useState } from 'react';
import { FaSearch,  } from 'react-icons/fa';

const SendMoney = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, accountNo: '12345678', name: '', amount: '' },
    { id: 2, accountNo: '87654321', name: '', amount: '' },
    // Add more accounts as needed
  ]);

  const handleAmountChange = (id, value) => {
    setTransactions(transactions.map(transaction => 
      transaction.id === id ? { ...transaction, amount: value } : transaction
    ));
  };

  const handleSendMoney = () => {
    // Handle sending money logic here
    alert('Money sent successfully!');
  };

  return (
    <>
    <hr />
    <div className='flex flex-col justify-center mt-5 mb-5 min-h-5'>
      <h1 className='text-black text-lg mb-1'>Send Money</h1>
      <h2>Keep track of your financial plan</h2>
      <div className="bg-white rounded-lg shadow-md w-full border border-gray-300 mt-4">
      <p className=" text-black text-lg  mb-4">Balance</p>
      <p className=" text-lg">Ksh. 130,543</p>
    </div>
    <div>

    <div className='w-1/2 mt-2'>
      <label className='text-black text-lg ml-2 '>Choose recipients</label>
      <input
            
            className="border border-gray-400 p-2 rounded-full ml-4 "
            placeholder="Search"
          />
          <button className='rounded-full bg-purple-700 w-6 h-6 ml-4 text-white'>
            <FaSearch/>
          </button>
          
    </div>
    
    </div>
    </div>
    <div className='flex'>
    <div> 
      <form>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.accountNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
       
      </form>
      </div>
      <div className='ml-9'>
        
          <label className=" font-bold">Enter Amount to Withdraw</label>
          <div>
          <input
           
            className="border border-gray-400 p-2 max-w-xs rounded-full"
            placeholder="Ksh."
          />
          </div>

<button
          
          className="bg-purple-800 text-white p-2 rounded-full mt-10  "
        >
          Send Money
        </button>
          
          

          
        </div>
        </div>
    
    </>
    
  );
};

export default SendMoney;
