
import React, { useState } from "react";
import UssdScreen from "../UssdScreen";
import UssdInput from "../UssdInput";
import { useUssd } from "@/context/UssdContext";

const LoginScreen = () => {
  const { login, navigate } = useUssd();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  
  const handlePhoneSubmit = (value: string) => {
    setPhoneNumber(value);
    setShowPin(true);
  };
  
  const handlePinSubmit = (pin: string) => {
    const success = login(phoneNumber, pin);
    if (!success) {
      setError("Invalid phone number or PIN");
    }
  };
  
  return (
    <UssdScreen title="Login to 365 Savings">
      <div className="space-y-4">
        {error && (
          <div className="bg-red-100 p-2 rounded text-red-600 text-sm mb-4">
            {error}
          </div>
        )}
        
        {!showPin ? (
          <>
            <div className="text-sm mb-4">
              Please enter your phone number to access your savings account.
            </div>
            <UssdInput 
              label="Phone Number" 
              type="text" 
              onSubmit={handlePhoneSubmit} 
              buttonText="Next"
            />
          </>
        ) : (
          <>
            <div className="text-sm mb-4">
              Enter your 4-digit PIN to access your account.
            </div>
            <UssdInput 
              label="PIN" 
              type="password" 
              onSubmit={handlePinSubmit} 
              buttonText="Login"
            />
          </>
        )}
        
        <button 
          onClick={() => navigate("welcome")} 
          className="w-full text-center text-ussd-blue text-sm mt-4"
        >
          Go Back
        </button>
      </div>
    </UssdScreen>
  );
};

export default LoginScreen;
