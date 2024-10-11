import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Ensure correct import from react-router-dom

const Register = () => {
  const [username, setUsername] = useState(""); // Initialize state with empty strings
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast("Register Successfully.");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/register", {
        name: username, // Use 'name' for consistency with backend
        email,
        password,
      });
      console.log(res);
      notify();
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed."); // Notify user of error
    }
  };

  return (
    <div className="flex items-center bg-slate-600 justify-center min-h-screen ">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Name"
            value={username} // Bind the input value
            onChange={(e) => setUsername(e.target.value)} // Correct state setter
          />
        </div>

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
            onChange={(e) => setEmail(e.target.value)} // Correct state setter
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
            onChange={(e) => setPassword(e.target.value)} // Correct state setter
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
