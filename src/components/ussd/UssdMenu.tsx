
import React from "react";
import { cn } from "@/lib/utils";

interface UssdMenuProps {
  options: { id: string; label: string }[];
  onSelect: (id: string) => void;
  className?: string;
}

const UssdMenu = ({ options, onSelect, className }: UssdMenuProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {options.map((option, index) => (
        <div 
          key={option.id} 
          onClick={() => onSelect(option.id)}
          className="flex items-start gap-2 p-2 bg-white rounded border border-gray-200 hover:bg-ussd-lightBlue active:bg-ussd-lightBlue cursor-pointer"
        >
          <span className="bg-ussd-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {index + 1}
          </span>
          <span className="flex-1">{option.label}</span>
        </div>
      ))}
      <div className="text-xs text-center mt-3 text-gray-500">
        Select an option or press the corresponding number
      </div>
    </div>
  );
};

export default UssdMenu;
