
import React from "react";
import PhoneFrame from "@/components/ussd/PhoneFrame";
import { UssdProvider, useUssd } from "@/context/UssdContext";

// Import all screens
import WelcomeScreen from "@/components/ussd/screens/WelcomeScreen";
import LoginScreen from "@/components/ussd/screens/LoginScreen";
import RegisterScreen from "@/components/ussd/screens/RegisterScreen";
import DashboardScreen from "@/components/ussd/screens/DashboardScreen";
import HistoryScreen from "@/components/ussd/screens/HistoryScreen";
import ProfileScreen from "@/components/ussd/screens/ProfileScreen";
import SettingsScreen from "@/components/ussd/screens/SettingsScreen";
import AboutScreen from "@/components/ussd/screens/AboutScreen";
import LogoutScreen from "@/components/ussd/screens/LogoutScreen";

const UssdApp = () => {
  const { currentScreen } = useUssd();
  
  // Render the current screen based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'login':
        return <LoginScreen />;
      case 'register':
        return <RegisterScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'history':
        return <HistoryScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'about':
        return <AboutScreen />;
      case 'logout':
        return <LogoutScreen />;
      default:
        return <WelcomeScreen />;
    }
  };
  
  return (
    <div>
      {renderScreen()}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-ussd-blue mb-2">365 Days Savings App</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Save $20 weekly for 365 days before withdrawal. 
          Auto-deductions from your mobile money account.
        </p>
      </div>
      
      <UssdProvider>
        <PhoneFrame>
          <UssdApp />
        </PhoneFrame>
      </UssdProvider>
      
      <div className="mt-8 text-center text-gray-500 text-sm max-w-md">
        <p>This is a simulation of a USSD application. In a real implementation, this would connect to mobile network operators and payment gateways.</p>
        <p className="mt-2">
          <strong>Demo credentials:</strong> Phone: 1234567890, PIN: 1234
        </p>
      </div>
    </div>
  );
};

export default Index;
