import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUser, faFingerprint, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Easy = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 bg-light">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center mb-4">
        <h2 className="text-3xl font-semibold">Getting Started</h2>
        <h2 className="text-3xl font-semibold">With Me</h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between">
        {/* Register Section */}
        <div className="flex flex-col items-center mb-4 w-1/3">
          <p className="text-4xl">
            <FontAwesomeIcon icon={faUser} />
          </p>
          <h2 className="text-lg font-semibold">Register Yourself</h2>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        {/* Login Section */}
        <div className="flex flex-col items-center mb-4 w-1/3">
          <p className="text-4xl">
            <FontAwesomeIcon icon={faFingerprint} />
          </p>
          <h2 className="text-lg font-semibold">Login</h2>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        {/* Fetch Data Section */}
        <div className="flex flex-col items-center mb-4 w-1/3">
          <p className="text-4xl">
            <FontAwesomeIcon icon={faDownload} />
          </p>
          <h2 className="text-lg font-semibold">Fetch Data</h2>
        </div>
      </div>
    </div>
  );
};

export default Easy;
