import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="container mx-auto my-5 ">
      <div className="min-w-[300px] bg-slate-50 border border-slate-300 rounded-lg shadow-sm p-3">
        <div className=" flex flex-col items-center justify-center space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="flex space-x-3">
            <Link to="" className="hover:text-cyan-500">
              Privacy Policy
            </Link>
            <Link to="" className="hover:text-cyan-500">
              Terms of Use
            </Link>
          </div>
          <div className="flex flex-col items-center ">
            <RiCustomerService2Fill className="w-6 h-6 text-red-600"></RiCustomerService2Fill>{" "}
            <span className="text-cyan-600 italic">Helpline: 98777</span>
          </div>
          <div>
            {year}&copy; <span className="text-cyan-500">Book Buddy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
