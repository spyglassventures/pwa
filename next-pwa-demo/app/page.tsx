import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


const Home = () => {
  return (
    <>
      <Head>
        <title>Mobile App Landing Page</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-gray-100 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 text-center">
          <h1 className="text-xl font-bold">Welcome to Our App</h1>
        </header>

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <Image
            src="/bird.svg" // also .jpg
            alt="App Logo"
            width={120}
            height={120}
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>

          <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
          </div>
        </div>

        {/* Footer with buttons */}
        <footer className="fixed inset-x-0 bottom-0 bg-white border-t">
        <div className="max-w-md mx-auto py-4 flex justify-around">
          <Link href="/signin" className="w-1/2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
            Sign In
          </Link>
          <Link href="/signup" className="w-1/2 text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r">
            Sign Up
          </Link>
        </div>
      </footer>


        {/* Footer Outside */}
        <footer className="bg-white shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company
          </p>
        </footer>



      </main>
    </>
  );
};

export default Home;
