
import React from "react";
import UssdScreen from "../UssdScreen";
import UssdMenu from "../UssdMenu";
import SavingsProgress from "../SavingsProgress";
import { useUssd } from "@/context/UssdContext";

const DashboardScreen = () => {
  const { balance, daysPassed, daysRemaining, user, nextDeductionDate, navigate } = useUssd();
  
  const targetAmount = 365 * (20 / 7); // $20 every 7 days for 365 days
  
  const options = [
    { id: "history", label: "Transaction History" },
    { id: "profile", label: "Account & Profile" },
    { id: "settings", label: "Settings" },
  ];
  
  return (
    <UssdScreen title="365 Savings Dashboard">
      <div className="space-y-4">
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-xs text-gray-500">Hello,</div>
          <div className="font-bold">{user?.name}</div>
        </div>
        
        <SavingsProgress 
          currentAmount={balance}
          targetAmount={targetAmount}
          daysPassed={daysPassed}
          daysRemaining={daysRemaining}
        />
        
        <div className="bg-ussd-lightBlue p-3 rounded-md border border-ussd-blue mb-4">
          <p className="text-sm">
            <span className="font-semibold">Next auto-deduction:</span> 
            <span className="ml-1">${20} on {nextDeductionDate}</span>
          </p>
        </div>
        
        <UssdMenu 
          options={options} 
          onSelect={(id) => {
            navigate(id);
          }}
        />
        
        <button
          onClick={() => navigate("logout")} 
          className="w-full bg-gray-200 text-gray-700 py-2 rounded mt-4 text-sm"
        >
          Logout
        </button>
      </div>
    </UssdScreen>
  );
};

export default DashboardScreen;
