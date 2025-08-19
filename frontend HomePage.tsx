import React from "react";
import { Link } from "react-router-dom";
import { QrCode, Users, Store as StoreIcon } from "lucide-react";

export const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Transparency in Every Harvest
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          FarmToFork connects farmers and consumers through blockchain
          technology, ensuring transparency and rewarding quality in
          agricultural products.
        </p>
      </section>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Product Traceability */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <QrCode className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Product Traceability</h2>
          <p className="text-gray-600 mb-4">
            Scan QR codes to track your food's journey from farm to fork.
          </p>
          <Link
            to="/scan"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Scan Now
          </Link>
        </div>

        {/* Farmer Portal */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Farmer Portal</h2>
          <p className="text-gray-600 mb-4">
            Generate QR codes and manage your farm's digital presence.
          </p>
          <Link
            to="/farmer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Access Portal
          </Link>
        </div>

        {/* Farming Tools Store */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <StoreIcon className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Farming Tools Store</h2>
          <p className="text-gray-600 mb-4">
            Redeem tokens for quality farming equipment and supplies.
          </p>
          <Link
            to="/store"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Visit Store
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Consumers */}
          <div>
            <h3 className="text-xl font-semibold mb-2">For Consumers</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Scan QR codes on agricultural products</li>
              <li>View detailed product history and farmer information</li>
              <li>Rate products and reward farmers with tokens</li>
              <li>Access verified FSSAI certification status</li>
            </ul>
          </div>

          {/* For Farmers */}
          <div>
            <h3 className="text-xl font-semibold mb-2">For Farmers</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Generate unique QR codes for product batches</li>
              <li>Document farming practices and growth journey</li>
              <li>Receive tokens from consumer ratings</li>
              <li>Redeem tokens for farming tools and equipment</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
