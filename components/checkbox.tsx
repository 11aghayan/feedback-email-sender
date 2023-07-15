'use client';

import { useRef, useState } from "react";

interface InputProps {
  label: string;
  name: string;
  answers: string[];
};

const Input: React.FC<InputProps> = ({ label, name, answers }) => {

  const [values, setValues] = useState({});
  
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-blue-300">
        {label}
      </h2>
      <div className="w-full grid sm:grid-cols-2 gap-2">
        {
          answers.map(answer => (
            <label 
              key={Math.random()}
              className="flex gap-2 justify-between border p-2 border-blue-300"
            > 
              <span className="text-lg text-gray-500" >
                {answer}
              </span>
              <input 
                type="checkbox"
                value={answer}
                name={name}
              />
            </label>
          ))
        }
      </div>
    </div>
  )
};

export default Input;