import { useNavigate } from "react-router-dom";
import useBlockBack from "../hook/useBlockBack";

const Home = () => {
  const navigate = useNavigate();
  useBlockBack();

return (
  <div className="min-h-screen w-full bg-gray-100">
    
    <header className="w-full bg-white shadow-md px-8 py-4">
      <h1 className="text-2xl font-bold text-gray-800">
        Registration App
      </h1>
    </header>

    <main className="flex flex-col items-center justify-center text-center
                     w-full px-10"
          style={{ minHeight: "calc(100vh - 72px)" }}>

      <h2 className="text-7xl font-extrabold text-gray-900 mb-6">
        Welcome to the Portal
      </h2>

      <p className="text-3xl text-gray-600 mb-10 max-w-4xl mx-auto">
        Complete your role-based registration to get started.
      </p>

      <button
        onClick={() => navigate("/register", { replace: true })}
        className="px-10 py-3 bg-blue-600 text-white text-lg
                   rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Start Registration
      </button>
    </main>

  </div>
);

};

export default Home;

