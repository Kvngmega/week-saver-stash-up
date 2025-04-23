
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Transaction } from '@/components/ussd/TransactionList';

interface User {
  phoneNumber: string;
  pin: string;
  name: string;
}

interface UssdContextType {
  isAuthenticated: boolean;
  currentScreen: string;
  balance: number;
  daysPassed: number;
  daysRemaining: number;
  user: User | null;
  transactions: Transaction[];
  nextDeductionDate: string;
  navigate: (screen: string) => void;
  login: (phoneNumber: string, pin: string) => boolean;
  logout: () => void;
  register: (phoneNumber: string, pin: string, name: string) => void;
}

const UssdContext = createContext<UssdContextType | undefined>(undefined);

export const UssdProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState(0);
  const [daysPassed, setDaysPassed] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  const daysRemaining = 365 - daysPassed;
  
  // Calculate next deduction date
  const getNextDeductionDate = () => {
    const today = new Date();
    // Find the next date that's a multiple of 7 days from the start
    const daysToAdd = 7 - (daysPassed % 7);
    today.setDate(today.getDate() + daysToAdd);
    return today.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const nextDeductionDate = getNextDeductionDate();

  // Simulate automatic deductions
  useEffect(() => {
    if (isAuthenticated) {
      // This would normally be a server-side process
      const timer = setInterval(() => {
        // For demo purposes, we're speeding up time - in a real app this would be synced with actual dates
        if (daysPassed < 365) {
          setDaysPassed(prev => {
            const newDays = prev + 1;
            
            // If it's a deduction day (every 7 days)
            if (newDays % 7 === 0) {
              // Add a deduction transaction
              const newTransaction: Transaction = {
                id: `txn-${Date.now()}`,
                date: new Date().toLocaleDateString(),
                amount: -20,
                type: "auto-deduction",
                status: "completed"
              };
              
              setTransactions(prev => [newTransaction, ...prev]);
              setBalance(prevBalance => prevBalance + 20);
            }
            
            return newDays;
          });
        }
      }, 5000); // Every 5 seconds for demo - would be daily in a real app
      
      return () => clearInterval(timer);
    }
  }, [isAuthenticated, daysPassed]);

  const navigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const login = (phoneNumber: string, pin: string) => {
    // Simple mock authentication - in a real app this would validate against a backend
    const mockUser = {
      phoneNumber: '1234567890',
      pin: '1234',
      name: 'John Doe'
    };
    
    if (phoneNumber === mockUser.phoneNumber && pin === mockUser.pin) {
      setUser(mockUser);
      setIsAuthenticated(true);
      navigate('dashboard');
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('welcome');
  };

  const register = (phoneNumber: string, pin: string, name: string) => {
    // In a real app, this would send data to the backend
    const newUser = { phoneNumber, pin, name };
    setUser(newUser);
    setIsAuthenticated(true);
    
    // Initialize with a deposit transaction
    const newTransaction: Transaction = {
      id: `txn-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      amount: 20,
      type: "deposit",
      status: "completed"
    };
    
    setTransactions([newTransaction]);
    setBalance(20);
    navigate('dashboard');
  };

  const value = {
    isAuthenticated,
    currentScreen,
    balance,
    daysPassed,
    daysRemaining,
    user,
    transactions,
    nextDeductionDate,
    navigate,
    login,
    logout,
    register
  };

  return <UssdContext.Provider value={value}>{children}</UssdContext.Provider>;
};

export const useUssd = () => {
  const context = useContext(UssdContext);
  if (context === undefined) {
    throw new Error('useUssd must be used within a UssdProvider');
  }
  return context;
};
