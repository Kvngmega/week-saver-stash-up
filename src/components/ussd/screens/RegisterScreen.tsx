
import React, { useState } from "react";
import UssdScreen from "../UssdScreen";
import UssdInput from "../UssdInput";
import { useUssd } from "@/context/UssdContext";

const RegisterScreen = () => {
  const { register, navigate } = useUssd();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    pin: ""
  });
  
  const handlePhoneSubmit = (value: string) => {
    setFormData(prev => ({ ...prev, phoneNumber: value }));
    setStep(2);
  };
  
  const handleNameSubmit = (value: string) => {
    setFormData(prev => ({ ...prev, name: value }));
    setStep(3);
  };
  
  const handlePinSubmit = (value: string) => {
    setFormData(prev => ({ ...prev, pin: value }));
    register(formData.phoneNumber, value, formData.name);
  };
  
  return (
    <UssdScreen title="Register for 365 Savings">
      <div className="space-y-4">
        {step === 1 && (
          <>
            <div className="text-sm mb-4">
              Enter your phone number to register a new savings account. Your mobile money will be linked to this number.
            </div>
            <UssdInput 
              label="Phone Number" 
              type="text" 
              onSubmit={handlePhoneSubmit} 
              buttonText="Next"
            />
          </>
        )}
        
        {step === 2 && (
          <>
            <div className="text-sm mb-4">
              Enter your full name.
            </div>
            <UssdInput 
              label="Full Name" 
              type="text" 
              onSubmit={handleNameSubmit} 
              buttonText="Next"
            />
          </>
        )}
        
        {step === 3 && (
          <>
            <div className="text-sm mb-4">
              Create a 4-digit PIN to secure your account.
            </div>
            <UssdInput 
              label="PIN (4 digits)" 
              type="password" 
              onSubmit={handlePinSubmit} 
              buttonText="Register"
            />
          </>
        )}
        
        <button 
          onClick={() => step > 1 ? setStep(step - 1) : navigate("welcome")} 
          className="w-full text-center text-ussd-blue text-sm mt-4"
        >
          Go Back
        </button>
      </div>
    </UssdScreen>
  );
};

export default RegisterScreen;
