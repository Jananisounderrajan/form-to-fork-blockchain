import React, { useState } from "react";
import { Consumer, Product } from "../types";
import { QrCode, History, Star, Wallet } from "lucide-react";

interface ConsumerProfileProps {
  consumer: Consumer;
  onScanQR: () => void;
}

export const ConsumerProfile: React.FC<ConsumerProfileProps> = ({
  consumer,
  onScanQR,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">{consumer.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Wallet className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                {consumer.walletAddress.slice(0, 6)}...
                {consumer.walletAddress.slice(-4)}
              </span>
            </div>
          </div>
          <button
            onClick={onScanQR}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <QrCode className="w-5 h-5" />
            Scan QR Code
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Scanned Products List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Scanned Products</h2>
          <div className="space-y-4">
            {consumer.scannedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-4 hover:shadow-md transition cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  Scanned on: {new Date().toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Journey Details */}
        {selectedProduct && (
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <History className="w-5 h-5" />
              Product Journey
            </h2>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-4">
                {selectedProduct.name}
              </h3>
              <div className="space-y-6">
                {selectedProduct.journey.map((stage, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-green-500 last:border-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-green-500 rounded-full" />
                    <h4 className="font-semibold">{stage.stage}</h4>
                    <p className="text-sm text-gray-600">{stage.location}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(stage.timestamp).toLocaleString()}
                    </p>
                    <p className="mt-2">{stage.description}</p>
                  </div>
                ))}
              </div>

              {/* Verification Section */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-2">FSSAI Verification</h4>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span>
                    Verified on{" "}
                    {new Date(
                      selectedProduct.fssaiVerification.date
                    ).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Certificate:{" "}
                  {selectedProduct.fssaiVerification.certificateNumber}
                </p>
              </div>

              {/* Rating Section */}
              <div className="mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                  <Star className="w-4 h-4" />
                  Rate Farmer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
