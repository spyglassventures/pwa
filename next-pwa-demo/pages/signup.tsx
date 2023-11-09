import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';

// Dynamically import the QRCodeReader component to avoid SSR issues with window

const SignUp = () => {
  const [data, setData] = useState('No result');

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      {/* Content for your sign-in page (you can add your form or other content here) */}

      {/* Sign In and Sign Up buttons */}
      <div className="space-y-4">
        <Link href="/" passHref>
          <button className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            back home
          </button>
        </Link>
        
      </div>

      {/* Return button at the bottom */}
      <div className="mt-4">
        
      </div>
    </div>
  );
};


export default SignUp;
