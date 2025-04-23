
import React from "react";
import UssdScreen from "../UssdScreen";
import { useUssd } from "@/context/UssdContext";

const AboutScreen = () => {
  const { navigate } = useUssd();
  
  return (
    <UssdScreen title="About 365 Savings">
      <div className="space-y-4">
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-bold text-ussd-blue mb-2">365 Days Savings</h3>
          
          <p className="text-sm mb-3">
            This service helps you save money gradually over a 365-day period, with automatic weekly deductions.
          </p>
          
          <h4 className="font-semibold text-sm">How it works:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            <li>$20 is automatically deducted from your mobile money account every 7 days</li>
            <li>Your savings are locked for 365 days</li>
            <li>After 365 days, you can withdraw your full savings</li>
            <li>Track your progress and transaction history anytime</li>
          </ul>
          
          <h4 className="font-semibold text-sm">Benefits:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Develop consistent savings habits</li>
            <li>Save without thinking about it</li>
            <li>Achieve your financial goals</li>
          </ul>
        </div>
        
        <button
          onClick={() => navigate("welcome")} 
          className="w-full bg-ussd-blue text-white py-2 px-4 rounded"
        >
          Back to Welcome
        </button>
      </div>
    </UssdScreen>
  );
};

export default AboutScreen;
