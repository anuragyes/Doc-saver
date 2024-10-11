import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const SetupHome = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide pt-0"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner max-w-full">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="/images/doc.jpg"
            className="w-full h-[400px] object-cover"
            alt="..."
          />
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="/images/doc.jpg"
            className="w-full h-[400px] object-cover"
            alt="..."
          />
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="/images/marketing.jpg"
            className="w-full h-[400px] object-cover"
            alt="..."
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/railway.jpg"
            className="w-full h-[400px] object-cover"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="visually-hidden">Next</span>
      </button>

      <hr />
      <hr />
      <br />

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row bg-slate-200 p-5 lg:p-32">
        {/* Left Content Area */}
        <div className="flex-1 mb-4 lg:mr-4">
          <h2 className="text-2xl font-bold mb-4">Content Area</h2>
          <p className="text-gray-800 font-medium text-lg">
            DigiLocker is a flagship initiative of the Ministry of Electronics & IT (MeitY) under the Digital India programme. DigiLocker aims at 'Digital Empowerment' of citizens by providing access to authentic digital documents to citizens' digital document wallets. DigiLocker is a secure cloud-based platform for storage, sharing, and verification of documents & certificates.
          </p>
          <p className="text-gray-800 font-medium text-lg">
            DigiLocker is a secure cloud-based platform for storage, sharing, and verification of documents & certificates.
          </p>
        </div>

        {/* Right Card Area */}
        <div className="flex-1 bg-white p-4 shadow-lg rounded">
          <h3 className="text-xl font-semibold mb-2">Card Title</h3>
          <p className="text-gray-600 mb-4">
            This is a card section. You can include any additional information or calls to action here.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default SetupHome;
