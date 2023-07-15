'use client';

import { useRouter } from "next/navigation";

interface FormProps {
  children: React.ReactNode;
  setIsLoading(arg: boolean): void;
  setError(arg: boolean): void;
}

interface bodyProps {
  [key: string]: string[];
}

const Form: React.FC<FormProps> = ({children , setIsLoading, setError}) => {
   const router = useRouter();

  const submitForm = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    const body: bodyProps = {} as bodyProps;
    
    for (const field of e.target) {
      if (field.checked) {
        if (body[field.name]) {
          body[field.name].push(field.value);
        } else {
          body[field.name] = [field.value];
        }
      } else if (field.type === 'textarea') {
        body.feedback = field.value;
      }
    }

    try {
      const res = await fetch('http://localhost:3000/api/send', {
        method: 'post',
        body: JSON.stringify(body),
      });

      setIsLoading(false);

      if (res.status === 200) {
        router.push('/success');
      } else {
        setError(true);
      }


    } catch (error: any) {
      setIsLoading(false);
      console.log(error.message);
    }

  };
  
  return (
    <form 
      onSubmit={submitForm}
      className="mx-auto flex gap-8 flex-col p-8 max-w-2xl border rounded-md shadow-md"
    >
      {children}
    </form>
  )
}

export default Form;