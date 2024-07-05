import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Adjust the import based on your Firebase configuration file

const WithdrawCash = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSend = async () => {
    if (accountNumber && amount) {
      try {
        const db = getFirestore(app);
        await addDoc(collection(db, 'withdrawals'), {
          accountNumber,
          amount,
          timestamp: new Date(),
        });
        alert('Withdrawal request sent successfully!');
        setAccountNumber('');
        setAmount('');
      } catch (error) {
        console.error('Error sending withdrawal request:', error);
        alert('Error sending withdrawal request. Please try again.');
      }
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <>
      <hr />
      <div className='flex flex-col justify-center  min-h-5'>
        <div className='text-center'>
        <h1 className=' mb-1 font-bold'>Withdraw Cash</h1>
        <h2>Keep track your financial plan</h2>
        </div>
        <div className="bg-white p-3 rounded  border border-gray-300 w-full mt-5">
        <h1 className="  text-center font-bold">Balance</h1>
        <p className="  font-bold">Ksh. 130,543</p>
      </div>
      

      
      <div className="flex  bg-white rounded-lg mt-40 w-full max-w-md">
        <div className='mr-5'>
        
          <label className=" font-bold">Account Number</label>
          <div>
          <input
            type="number"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            className="border border-gray-400 p-2 rounded-full "
            placeholder="Account No."
          />
          </div>
       
        </div>
        <div className="ml-6">
        
          <label className=" font-bold">Enter Amount to Withdraw</label>
          <div>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="border border-gray-400 p-2 max-w-xs rounded-full"
            placeholder="Ksh."
          />
          </div>

<button
          type="button"
          onClick={handleSend}
          className="bg-purple-800 text-white p-2 rounded-full mt-10  "
        >
          Send Money
        </button>
          
          

          
        </div>

        </div>

        
        
      </div>
      
    </>
  );
};

export default WithdrawCash;
