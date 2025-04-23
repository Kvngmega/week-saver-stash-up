
import React from "react";
import UssdScreen from "../UssdScreen";
import UssdMenu from "../UssdMenu";
import { useUssd } from "@/context/UssdContext";

const SettingsScreen = () => {
  const { navigate } = useUssd();
  
  const options = [
    { id: "notifications", label: "Notification Settings" },
    { id: "changePin", label: "Change PIN" },
    { id: "about", label: "About this service" },
  ];
  
  return (
    <UssdScreen title="Settings">
      <div className="space-y-4">
        <UssdMenu 
          options={options} 
          onSelect={(id) => {
            // For this demo, we'll just show an alert
            alert(`${id} feature would open here in a full implementation`);
          }}
        />
        
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

export default SettingsScreen;
