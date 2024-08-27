import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { firestore } from '../firebase.js';
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';

const SendMoney = ({ balance, updateBalance }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, accountNo: '12345678', name: 'Peter Paul' },
    { id: 2, accountNo: '87654321', name: 'Esther Wanjiru' },
    { id: 3, accountNo: '23456789', name: 'Aaron Mwangi' },
    { id: 4, accountNo: '98765432', name: 'Joy Wangui' },
    { id: 5, accountNo: '01234567', name: 'Emmanuel Gichuki' }
  ]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSendMoney = async () => {
    if (selectedAccount && amount) {
      const transactionAmount = parseFloat(amount);
      const transactionFee = transactionAmount * 0.02; // 2% transaction fee
      const totalAmount = transactionAmount + transactionFee;

      if (totalAmount > balance) {
        alert('Insufficient balance');
        return;
      }

      const newBalance = balance - totalAmount;
      updateBalance(newBalance);

      try {
        const docRef = doc(firestore, "users", "yourUserId");
        await setDoc(docRef, { balance: newBalance }, { merge: true });

        const transactionsRef = collection(firestore, "transactions");
        await addDoc(transactionsRef, {
          accountNo: selectedAccount.accountNo,
          name: selectedAccount.name,
          amount: transactionAmount,
          fee: transactionFee,
          timestamp: new Date()
        });

        alert('Transaction successful!');
      } catch (error) {
        console.error('Error sending money:', error);
        alert('Error sending money. Please try again.');
      }
    } else {
      alert('Please select an account and enter an amount.');
    }
  };

  return (
    <>
      <hr />
      <div className='flex flex-col justify-center mt-5 mb-5 min-h-5'>
        <h1 className='text-black font-bold text-lg mb-1'>Send Money</h1>
        <h2>Keep track of your financial plan</h2>
        <div className="bg-white rounded-lg shadow-md w-full border border-gray-300 mt-4">
          <p className="text-black text-lg p-4">Balance</p>
          <p className="text-lg p-4">Ksh. {balance}</p>
        </div>
        <div>
          <div className='w-1/2 mt-2 flex items-center'>
            <label className='text-black font-bold text-lg ml-2'>Choose recipients</label>
            <input
              className="border border-gray-400 p-2 rounded-full ml-4"
              placeholder="Search"
            />
            <button className='rounded-full bg-purple-700 p-2 ml-4 text-white flex items-center justify-center'>
              <FaSearch className='w-4 h-4' />
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
                  <tr
                    key={transaction.id}
                    onClick={() => setSelectedAccount(transaction)}
                    className={selectedAccount?.id === transaction.id ? 'bg-gray-200' : ''}
                  >
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
          <label className="font-bold">Enter Amount You Wish to Send</label>
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
            onClick={handleSendMoney}
            className="bg-purple-800 text-white p-2 rounded-full mt-10"
          >
            Send Money
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMoney;
