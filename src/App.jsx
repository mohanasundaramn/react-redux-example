import AccountOperations from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
import CreateCustomer from "./CreateCustomer";
import Customer from "./Customer";

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl mb-4">🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <div className="flex justify-between items-start">
        <AccountOperations />
        <BalanceDisplay />
      </div>
    </div>
  );
}

export default App;
