
import React from "react";
import UssdScreen from "../UssdScreen";
import { useUssd } from "@/context/UssdContext";

const ProfileScreen = () => {
  const { user, balance, daysPassed, daysRemaining, navigate } = useUssd();
  
  const canWithdraw = daysRemaining <= 0;
  
  return (
    <UssdScreen title="Account & Profile">
      <div className="space-y-4">
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm border-b pb-1 mb-2">Account Information</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Name:</span>
              <span className="font-medium">{user?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Phone:</span>
              <span className="font-medium">{user?.phoneNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Days Saved:</span>
              <span className="font-medium">{daysPassed} / 365</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Saved:</span>
              <span className="font-medium">${balance}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status:</span>
              <span className={`font-medium ${canWithdraw ? "text-ussd-green" : "text-yellow-600"}`}>
                {canWithdraw ? "Eligible for withdrawal" : "Saving in progress"}
              </span>
            </div>
          </div>
        </div>
        
        {canWithdraw ? (
          <button
            onClick={() => navigate("withdraw")} 
            className="w-full bg-ussd-green text-white py-2 px-4 rounded"
          >
            Withdraw Funds
          </button>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md text-sm text-yellow-800">
            <p className="font-medium">Withdrawal Locked</p>
            <p className="text-xs mt-1">
              You can withdraw your savings after 365 days. 
              {daysRemaining > 0 ? ` ${daysRemaining} days remaining.` : ""}
            </p>
          </div>
        )}
        
        <button
          onClick={() => navigate("dashboard")} 
          className="w-full bg-ussd-blue text-white py-2 px-4 rounded mt-2"
        >
          Back to Dashboard
        </button>
      </div>
    </UssdScreen>
  );
};

export default ProfileScreen;
