import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './index.css'  // Import Tailwind CSS here
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="min-h-screen w-screen overflow-hidden">
        <App />
        <Toaster position="top-right"/>
      </div>
    </Provider>
  </StrictMode>
);
