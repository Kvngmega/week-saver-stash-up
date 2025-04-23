
import React from "react";
import UssdScreen from "../UssdScreen";
import TransactionList from "../TransactionList";
import { useUssd } from "@/context/UssdContext";

const HistoryScreen = () => {
  const { transactions, navigate } = useUssd();
  
  return (
    <UssdScreen title="Transaction History">
      <div className="space-y-4">
        <TransactionList transactions={transactions} />
        
        {transactions.length > 0 && (
          <div className="bg-ussd-lightBlue p-2 rounded text-xs text-center">
            Auto-deductions of $20 occur every 7 days
          </div>
        )}
        
        <button
          onClick={() => navigate("dashboard")} 
          className="w-full bg-ussd-blue text-white py-2 px-4 rounded mt-4"
        >
          Back to Dashboard
        </button>
      </div>
    </UssdScreen>
  );
};

export default HistoryScreen;
