import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import SetupHome from "./components/SetupHome";
import Easy from "./components/Easy";
import NavFirst from "./components/NavFirst";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },

  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <NavFirst />
        <SetupHome />
        <Easy />
        <Footer/>
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <div className="w-full h-full flex flex-col">
        <NavFirst />
        <Login />
        <Footer />
      </div>
    ),
  },

  {
    path: "/Register",
    element: (
      <div className="w-full h-full flex flex-col">
        <NavFirst />
        <Register />
        <Footer />
      </div>
    ),
  },

  {
    path: "/pastes",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
