import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { firestore } from '../firebase.js';
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';//firestore functions

const SendMoney = () => {
  const [balance, setBalance] = useState(100000); //balance stores the users current balance
  const [transactions, setTransactions] = useState([
    { id: 1, accountNo: '12345678', name: 'Peter Paul' },
    { id: 2, accountNo: '87654321', name: 'Esther Wanjiru' },
    { id: 3, accountNo: '23456789', name: 'Aaron Mwangi' },
    { id: 4, accountNo: '98765432', name: 'Joy Wangui' },
    { id: 5, accountNo: '01234567', name: 'Emmanuel Gichuki' }
  ]);//array of users
  const [selectedAccount, setSelectedAccount] = useState(null);//
  const [amount, setAmount] = useState('');//amount of money to send

  useEffect(() => {
    // Fetch initial balance from Firestore
    const fetchBalance = async () => {
      const docRef = doc(firestore, "users", "yourUserId"); // Adjust path as necessary
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBalance(docSnap.data().balance);
      } else {
        console.log("No such document!");
      }
    };

    fetchBalance();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };//updates the amount state when the input value changes

  const handleSendMoney = async () => {
    if (selectedAccount && amount)//checks if an account or an amount is selected/entered
     {
      const newBalance = balance - parseFloat(amount);
      setBalance(newBalance);//deducts the amount from the balance and updates balance state

      // Update balance in Firestore
      const docRef = doc(firestore, "users", "yourUserId"); 
      await setDoc(docRef, { balance: newBalance }, { merge: true });

      // Save transaction details in Firestore
      const transactionsRef = collection(firestore, "transactions"); // Adjust path as necessary
      await addDoc(transactionsRef, {
        accountNo: selectedAccount.accountNo,
        name: selectedAccount.name,
        amount: parseFloat(amount),
        timestamp: new Date()
      });

      alert('successfull!');
    } else {
      alert('Error.');
    }
  };

  return (
    <>
      <hr />
      <div className='flex flex-col justify-center mt-5 mb-5 min-h-5'>
        <h1 className='text-black text-lg mb-1'>Send Money</h1>
        <h2>Keep track of your financial plan</h2>
        <div className="bg-white rounded-lg shadow-md w-full border border-gray-300 mt-4">
          <p className="text-black text-lg mb-4">Balance</p>
          <p className="text-lg">Ksh. {balance}</p>
        </div>
        <div>
          <div className='w-1/2 mt-2 flex items-center'>
            <label className='text-black text-lg ml-2'>Choose recipients</label>
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
          <label className="font-bold">Enter Amount to Send</label>
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
