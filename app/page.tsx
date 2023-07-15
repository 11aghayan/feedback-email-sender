'use client';

import { useState } from "react";

import Form from "@/components/form";
import Input from "@/components/checkbox";
import Loading from "@/components/loading";

const fields = [
  {
    label: 'How Are You Feeling Today?',
    name: 'how are you feeling?',
    answers: ['Very Bad', 'Bad', 'Good', 'Very Very Good'],
  },
  {
    label: 'What Color Is Your Bugatti?',
    name: 'what color is your bugatti?',
    answers: ['black', 'white', 'gray', 'blue'],
  },
  {
    label: 'Where Are Located The Egyptian Pyramids?',
    name: 'where are the egyptian pyramids?',
    answers: ['London', 'Cairo', 'Budapest', 'Goris'],
  }
];

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  

  return (
    <Form 
      setIsLoading={setIsLoading} 
      setError={setError}
    >
      {
        fields.map(field => (
          <Input 
            key={field.name} 
            label={field.label} 
            name={field.name}
            answers={field.answers}
          />
        ))
      }
      <div>
        <h2 className="text-lg font-semibold text-blue-300">
          Feedback
        </h2>
        <textarea className="w-full h-32 border border-blue-300 text-gray-500 outline-none resize-none p-2"></textarea>
      </div>
      {error && <p className="mx-auto text-red-600 text-lg">Something went wrong. Please refresh the page and try again</p>}
      <button 
        disabled={isLoading}
        className="border rounded-md p-2 shadow-sm text-white bg-blue-400 text-lg active:shadow-none disabled:bg-gray-400 transition-all">
        {
          isLoading ? <Loading /> : <span>Send</span>
        }
      </button>
    </Form>
  )
}

export default Page;