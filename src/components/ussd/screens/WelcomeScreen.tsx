
import React from "react";
import UssdScreen from "../UssdScreen";
import UssdMenu from "../UssdMenu";
import { useUssd } from "@/context/UssdContext";

const WelcomeScreen = () => {
  const { navigate } = useUssd();
  
  const options = [
    { id: "login", label: "Login" },
    { id: "register", label: "Register new account" },
    { id: "about", label: "About this service" }
  ];
  
  return (
    <UssdScreen title="365 Days Savings">
      <div className="space-y-4">
        <div className="bg-ussd-lightGreen p-3 rounded-md border border-ussd-green mb-4">
          <p className="text-center font-bold text-ussd-green text-sm">
            Welcome to 365 Savings
          </p>
          <p className="text-center text-xs mt-1">
            Save $20 weekly for 365 days
          </p>
        </div>
        
        <UssdMenu 
          options={options} 
          onSelect={(id) => {
            navigate(id);
          }} 
        />
      </div>
    </UssdScreen>
  );
};

export default WelcomeScreen;
