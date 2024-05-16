import { useState } from "react";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  function handleDeposit() {}

  function handleWithdrawal() {}

  function handleRequestLoan() {}

  function handlePayLoan() {}

  return (
    <div className="bg-gray-100 p-4 rounded-md w-9/12">
      <h2 className="text-xl mb-4">Your account operations</h2>
      <div className="flex flex-col">
        <div>
          <label className="block mb-2">Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 mt-2 ml-4"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button
            onClick={handleDeposit}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
          >
            Deposit {depositAmount}
          </button>
        </div>

        <div>
          <label className="block mb-2">Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
          />
          <button
            onClick={handleWithdrawal}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md ml-4"
          >
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label className="block mb-2">Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
            className="border border-gray-300 rounded-md px-2 py-1"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            className="border border-gray-300 rounded-md px-2 py-1 mt-2 ml-4"
          />
          <button
            onClick={handleRequestLoan}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md ml-4"
          >
            Request loan
          </button>
        </div>

        <div className="mt-6">
          <span className="block mb-2">Pay back $X</span>
          <button
            onClick={handlePayLoan}
            className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md"
          >
            Pay loan
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
