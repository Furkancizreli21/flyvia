"use client";

import { useState } from "react";

export default function HotelTabs() {
  const [activeTab, setActiveTab] = useState("genel");

  const tabs = [
    { id: "genel", label: "Genel Bakış" },
    { id: "olanaklar", label: "Olanaklar" },
    { id: "yorumlar", label: "Yorumlar" },
    { id: "konum", label: "Konum" },
  ];

  return (
    <div className="w-3/4 ">
      {/* --- TAB BAŞLIKLARI --- */}
      <div className="flex border-b border-gray-200">
        {" "}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` py-3 px-6 text-sm font-medium transition-all duration-300 relative ${
              activeTab === tab.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700 cursor-pointer"
            } `}
          >
            {" "}
            {tab.label} {/* Alt Çizgi Animasyonu */}{" "}
            {activeTab === tab.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-md" />}{" "}
          </button>
        ))}{" "}
      </div>
      {/* --- TAB İÇERİKLERİ --- */}
      <div className="p-6 bg-gray-50 rounded-b-lg min-h-50">
        {activeTab === "genel" && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Otel Hakkında</h3>
            <p className="text-gray-600">Bu otel, şehir merkezine yakınlığı ve eşsiz manzarasıyla bilinir...</p>
          </div>
        )}

        {activeTab === "olanaklar" && (
          <div className="animate-fade-in">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Ücretsiz Wi-Fi</li>
              <li>Açık Yüzme Havuzu</li>
              <li>Spor Salonu</li>
            </ul>
          </div>
        )}

        {activeTab === "yorumlar" && (
          <div className="animate-fade-in">
            <p className="text-gray-600">Henüz yorum yapılmamış.</p>
          </div>
        )}

        {activeTab === "konum" && (
          <div className="animate-fade-in">
            <p className="text-gray-600">Harita bileşeni buraya gelecek.</p>
          </div>
        )}
      </div>
    </div>
  );
}
