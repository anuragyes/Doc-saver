import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Ensure you're importing from react-router-dom

const Login = () => {
  const [email, setEmail] = useState(""); // Initialize with empty string
  const [password, setPassword] = useState(""); // Initialize with empty string

  const notifySuccess = () => {
    toast("Login Successfully.", {
      className: "bg-green-500 text-white p-3 rounded-lg shadow-md", // Tailwind styles
    });
  };
  const notifyError = () => {
    toast("Something went wrong", {
      className: "bg-red-500 text-white p-3 rounded-lg shadow-md", // Tailwind styles for error
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      console.log(res);

      if (res.data === "Success") {
        notifySuccess();
        navigate("/");
      } else {
        notifyError();
        // Reset fields for better UX
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      console.error(err);
     
    }
  };

  return (
    <div className="flex items-center bg-slate-600 justify-center min-h-screen ">
      <Toaster />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="example@example.com"
            value={email} // Bind the input value
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="••••••••"
            value={password} // Bind the input value
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
