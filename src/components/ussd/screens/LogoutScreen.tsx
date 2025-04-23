
import React from "react";
import UssdScreen from "../UssdScreen";
import { useUssd } from "@/context/UssdContext";

const LogoutScreen = () => {
  const { logout, navigate } = useUssd();
  
  return (
    <UssdScreen title="Logout">
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
          <p className="mb-4">Are you sure you want to logout?</p>
          
          <div className="flex space-x-3">
            <button
              onClick={logout} 
              className="flex-1 bg-ussd-blue text-white py-2 px-4 rounded"
            >
              Yes, Logout
            </button>
            
            <button
              onClick={() => navigate("dashboard")} 
              className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </UssdScreen>
  );
};

export default LogoutScreen;
