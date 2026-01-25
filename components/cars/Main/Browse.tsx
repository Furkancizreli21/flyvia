import { FaCarOn, FaCarRear } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineElectricCar } from "react-icons/md";

const Browse = () => {
  const classes =
    "flex flex-col gap-2 bg-white p-7 rounded-xl items-center hover:opacity-60 hover:bg-gray-200 transition duration-300";
  return (
    <div className="mt-20 ">
      <h2 className="font-bold text-2xl mb-5">Browse by car type</h2>
      <div className="grid grid-cols-4 gap-10 cursor-pointer ">
        <div className={classes}>
          <FaCarOn color="blue" size={25} />
          <h6 className="font-bold">Economy</h6>
          <p className="text-slate-500">From $30/day</p>
        </div>
        <div className={classes}>
          <FaCarRear color="blue" size={25} />

          <h6 className="font-bold">SUV</h6>
          <p className="text-slate-500">From $55/day</p>
        </div>
        <div className={classes}>
          <IoDiamondOutline color="blue" size={25} />

          <h6 className="font-bold">Luxury</h6>
          <p className="text-slate-500">From $120/day</p>
        </div>
        <div className={classes}>
          <MdOutlineElectricCar color="blue" size={25} />

          <h6 className="font-bold">Electric</h6>
          <p className="text-slate-500">From $75/day</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
