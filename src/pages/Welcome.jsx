import { Link, useLocation } from 'react-router-dom';
import useBlockBack from '../hook/useBlockBack';

const Welcome = () => {
  const { state } = useLocation();
  const role = state?.role || 'User';

  useBlockBack();

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <header className="w-full bg-white shadow-md px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Registration App</h1>
      </header>

      <main
        className="flex flex-col items-center justify-center text-center
                   w-full px-10"
        style={{ minHeight: 'calc(100vh - 72px)' }}
      >
        <p className="text-green-600 text-lg font-medium mb-2">
          Registration Successful 🎉
        </p>

        <h2 className="text-6xl font-extrabold text-gray-900 mb-4">
          Welcome, {role}
        </h2>

        <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Your registration is complete. You're all set to continue.
        </p>

        <Link
          to="/"
          className="px-10 py-3 bg-blue-600 text-white text-lg
                     rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Go to Dashboard Home
        </Link>
      </main>
    </div>
  );
};

export default Welcome;
