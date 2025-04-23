
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface UssdScreenProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const UssdScreen = ({ title, children, className }: UssdScreenProps) => {
  return (
    <div className={cn("flex flex-col h-full bg-ussd-gray", className)}>
      <div className="bg-ussd-blue text-white p-2 font-bold text-center">
        {title}
      </div>
      <div className="flex-1 p-3 overflow-auto">{children}</div>
    </div>
  );
};

export default UssdScreen;
