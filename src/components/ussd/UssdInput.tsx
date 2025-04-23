
import React, { useState } from "react";

interface UssdInputProps {
  label: string;
  type?: "text" | "number" | "password";
  onSubmit: (value: string) => void;
  buttonText?: string;
}

const UssdInput = ({ label, type = "text", onSubmit, buttonText = "Submit" }: UssdInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="text-sm font-medium">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <button
        type="submit"
        className="w-full bg-ussd-green text-white py-2 px-4 rounded hover:bg-opacity-90"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default UssdInput;
