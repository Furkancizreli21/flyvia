"use client";

import { useState } from "react";

export default function HotelTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "amenities", label: "Amenities" },
    { id: "comments", label: "Comments" },
    { id: "location", label: "Location" },
  ];

  return (
    <div className="w-3/4 ">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` py-3 px-6 text-sm font-medium transition-all duration-300 relative ${
              activeTab === tab.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700 cursor-pointer"
            } `}
          >
            {tab.label}
            {activeTab === tab.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-md" />}
          </button>
        ))}
      </div>

      <div className="p-6 bg-gray-50 rounded-b-lg min-h-50">
        {activeTab === "overview" && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold text-gray-800 mb-2">About Hotel</h3>
            <p className="text-gray-600">This hotel is known for its proximity to the city center and its unique views...</p>
          </div>
        )}

        {activeTab === "amenities" && (
          <div className="animate-fade-in">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Free Wi-Fi</li>
              <li>Pool</li>
              <li>Gym</li>
            </ul>
          </div>
        )}

        {activeTab === "comments" && (
          <div className="animate-fade-in">
            <p className="text-gray-600">No comments yet .</p>
          </div>
        )}

        {activeTab === "location" && (
          <div className="animate-fade-in">
            <p className="text-gray-600"></p>
          </div>
        )}
      </div>
    </div>
  );
}
