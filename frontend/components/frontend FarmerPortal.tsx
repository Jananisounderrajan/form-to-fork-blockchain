import React, { useState } from "react";
import { QrCode, Plane as Plant, History, Award } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export const FarmerPortal = () => {
  const [productName, setProductName] = useState("");
  const [plantationDate, setPlantationDate] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [generatedQR, setGeneratedQR] = useState("");

  const handleGenerateQR = () => {
    const productData = {
      id: Math.random().toString(36).substr(2, 9),
      name: productName,
      plantationDate,
      harvestDate,
      timestamp: new Date().toISOString(),
    };
    setGeneratedQR(JSON.stringify(productData));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Farmer Portal</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage your farm's digital presence, generate QR codes for your
          products, and track your token earnings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* QR Code Generator */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <QrCode className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold">Generate QR Code</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Organic Tomatoes"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plantation Date
                </label>
                <input
                  type="date"
                  value={plantationDate}
                  onChange={(e) => setPlantationDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Harvest Date
                </label>
                <input
                  type="date"
                  value={harvestDate}
                  onChange={(e) => setHarvestDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleGenerateQR}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Generate QR Code
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <History className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-gray-600">Today</p>
                <p className="font-medium">Generated QR for Organic Tomatoes</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600">Yesterday</p>
                <p className="font-medium">Received 50 tokens from ratings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Generated QR Display */}
          {generatedQR && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <QrCode className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold">Generated QR Code</h2>
              </div>
              <div className="flex justify-center p-4 bg-white">
                <QRCodeSVG value={generatedQR} size={200} />
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Print this QR code and attach it to your product
              </p>
            </div>
          )}

          {/* Token Balance */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold">Token Balance</h2>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">250</p>
              <p className="text-gray-600">Available Tokens</p>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                Redeem Tokens
              </button>
            </div>
          </div>

          {/* Farm Statistics */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Plant className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold">Farm Statistics</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Products Listed</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Rating</span>
                <span className="font-semibold">4.8/5.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Earnings</span>
                <span className="font-semibold">1,250 Tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
