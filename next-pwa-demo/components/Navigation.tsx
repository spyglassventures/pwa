// components/Navigation.tsx

import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <a className="text-xl font-bold">App Name</a>
      </Link>
      <div>
        <Link href="/signin">
          <a className="px-4 py-2 rounded bg-blue-500 text-white">Sign In</a>
        </Link>
        <Link href="/signup">
          <a className="px-4 py-2 rounded bg-green-500 text-white ml-4">Sign Up</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
