
import React from "react";

interface SavingsProgressProps {
  currentAmount: number;
  targetAmount: number;
  daysPassed: number;
  daysRemaining: number;
}

const SavingsProgress = ({ currentAmount, targetAmount, daysPassed, daysRemaining }: SavingsProgressProps) => {
  const percentage = Math.min(100, Math.round((currentAmount / targetAmount) * 100));
  const daysPercentage = Math.min(100, Math.round((daysPassed / 365) * 100));

  return (
    <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4 shadow-sm">
      <div className="flex justify-between mb-1 text-sm">
        <span>Current Savings</span>
        <span className="font-bold">${currentAmount}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
        <div 
          className="bg-ussd-green h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>$0</span>
        <span>${targetAmount}</span>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between mb-1 text-sm">
          <span>Time until withdrawal</span>
          <span className="font-bold">{daysRemaining} days</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
          <div 
            className="bg-ussd-blue h-2.5 rounded-full" 
            style={{ width: `${daysPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Day 0</span>
          <span>Day 365</span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-center text-gray-500">
        Remaining until withdrawal: {daysRemaining} days
      </div>
    </div>
  );
};

export default SavingsProgress;
