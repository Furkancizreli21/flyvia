import { CarsDetails } from "@/data/CarsData";
import CarCard from "../CarCard";

const Cars = () => {
  return (
    <div>
      <div className="flex  justify-between mt-20 ">
        <h2 className="font-bold text-2xl ">Featured Deals</h2>
        <button className="group flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors py-2 cursor-pointer">
          View All
          <span className="block transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 ">
        {CarsDetails.map((car, index) => {
          return (
            <div key={index}>
              <CarCard car={car} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
