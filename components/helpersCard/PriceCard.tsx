import { FaBolt } from "react-icons/fa";

interface priceProp {
  price: number;
}

export default function BookingCard({ price }: priceProp) {
  return (
    <div className="w-full max-w-95 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-24">
      <div className="flex items-end gap-1 mb-6">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500 text-base mb-1">/ night</span>
      </div>

      <div className="border border-gray-300 rounded-xl mb-4 overflow-hidden">
        <div className="flex border-b border-gray-300">
          <div className="w-1/2 p-3 border-r border-gray-300 hover:bg-gray-50 cursor-pointer transition">
            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1">Check-in</label>
            <div className="text-gray-900 font-medium text-sm">Oct 24, 2024</div>
          </div>
          <div className="w-1/2 p-3 hover:bg-gray-50 cursor-pointer transition">
            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1">Check-out</label>
            <div className="text-gray-900 font-medium text-sm">Oct 29, 2024</div>
          </div>
        </div>

        <div className="p-3 hover:bg-gray-50 cursor-pointer transition">
          <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1">Guests</label>
          <div className="text-gray-900 font-medium text-sm">2 Adults, 1 Room</div>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors duration-200 text-lg shadow-md hover:shadow-lg">
        Check Availability
      </button>
      <p className="text-center text-sm text-gray-500 mt-3 mb-6">You won’t be charged yet</p>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600 text-base">
          <span className="underline decoration-gray-300 cursor-pointer hover:text-gray-900">1 night</span>
          <span>${price}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-base">
          <span className="underline decoration-gray-300 cursor-pointer hover:text-gray-900">Service fee</span>
          <span>$125</span>
        </div>
        <div className="flex justify-between text-gray-600 text-base">
          <span className="underline decoration-gray-300 cursor-pointer hover:text-gray-900">Tourist tax</span>
          <span>$45</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-xl font-bold text-gray-900">${`${price}`}</span>
      </div>
      <div className="mt-6 bg-green-50 rounded-lg p-3 flex items-center justify-center gap-2 text-green-700 font-semibold text-xs sm:text-sm">
        <FaBolt className="text-lg" />
        <span>FREE CANCELLATION UNTIL OCT 20</span>
      </div>
    </div>
  );
}
