
import React from "react";

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: "deposit" | "withdrawal" | "auto-deduction";
  status: "completed" | "pending" | "failed";
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-sm mb-2">Recent Transactions</h3>
      
      {transactions.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          No transactions yet
        </div>
      ) : (
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div 
              key={tx.id} 
              className="bg-white p-3 rounded border border-gray-200 text-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium capitalize">
                    {tx.type.replace("-", " ")}
                  </div>
                  <div className="text-xs text-gray-500">{tx.date}</div>
                </div>
                <div className={`font-bold ${tx.amount > 0 ? "text-ussd-green" : "text-red-500"}`}>
                  {tx.amount > 0 ? "+" : ""}{tx.amount} USD
                </div>
              </div>
              <div className="mt-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  tx.status === "completed" ? "bg-green-100 text-green-800" : 
                  tx.status === "pending" ? "bg-yellow-100 text-yellow-800" : 
                  "bg-red-100 text-red-800"
                }`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
