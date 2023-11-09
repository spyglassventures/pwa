import { useState } from 'react';
import Link from 'next/link';

const SignIn = () => {
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

       {/* Sign In and Sign Up buttons */}
       <div className="space-y-4">
        <Link href="/generateqr" passHref>
          <button className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to QR Code Generator
          </button>
        </Link>
      </div>

      <div>
        <h1>My Sign-In content</h1>
      </div>

      

      {/* Return button at the bottom */}
      <div className="mt-4">
        
      </div>
    </div>
  );
};

export default SignIn;
