import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const WhyUs = () => {
  return (
    <div className="flex my-20  gap-10 h-auto items-stretch">
      <div className="flex-1 flex-col">
        <div>
          <h1 className="text-3xl font-extrabold mb-5">Why rent with TravelDrive?</h1>
          <p className="text-slate-700 mb-14">
            We make renting a car as easy as booking a hotel room. Transparency,safety and 24/7 support.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="flex items-start gap-5">
            <div className="bg-blue-200 p-4 rounded-2xl flex items-center">
              <AiFillSafetyCertificate color="blue" size={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-lg">Full Coverage</h2>
              <p className="text-sm text-slate-500">Collision damage waiver and theft protection included.</p>
            </div>
          </div>
          <div className="flex items-start  gap-5">
            <div className="bg-blue-200 p-4 rounded-2xl">
              <SlCalender color="blue" size={25} />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-lg">Free Cancellation</h2>
              <p className="text-sm text-slate-500">Up to 48 hours before pick-up for most bookings.</p>
            </div>
          </div>
          <div className="flex items-start  gap-5">
            <div className="bg-blue-200 p-4 rounded-2xl">
              <IoMdContacts color="blue" size={25} />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-lg">24/7 Roadside</h2>
              <p className="text-sm text-slate-500">Never stranded with out global roadside assistance.</p>
            </div>
          </div>
          <div className="flex items-start  gap-5">
            <div className="bg-blue-200 p-4 rounded-2xl">
              <FaMoneyCheck color="blue" size={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-lg">No Hidden Fees</h2>
              <p className="text-sm text-slate-500">What you see is what you pay. Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <div className=" bg-white rounded-3xl p-10  h-fit box-content shadow-xl">
          <h2 className="font-bold text-3xl mb-5 ">Rental Requirements</h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <FcApproval size={25} />
              <div>
                <h4 className="font-bold text-lg">Valid Drivers' License</h4>
                <p className="text-xs text-slate-500">Must have help for at latest 12 months with no major endorsements.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <FcApproval size={25} />
              <div>
                <h4 className="font-bold text-lg">Age Requirements</h4>
                <p className="text-xs text-slate-500">Drivers must be 21+.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <FcApproval size={25} />
              <div>
                <h4 className="font-bold text-lg">Payment Method</h4>
                <p className="text-xs text-slate-500">Major Credit Card required for the security deposit at pick-up.</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-5">Our Top Partners</h3>

            <div className="flex items-center justify-between gap-2 opacity-40 ">
              <span className="font-black italic text-xl text-slate-800 tracking-tighter">HERTZ</span>
              <span className="font-extrabold text-xl text-slate-800">SIXT</span>
              <span className="font-serif font-bold italic text-lg text-slate-800">Enterprise</span>
              <span className="font-bold italic text-xl text-slate-800 tracking-wide">AVIS</span>
              <span className="font-bold text-lg text-slate-800 italic">Europcar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
