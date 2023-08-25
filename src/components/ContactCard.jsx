import React from "react";
import { BsFillPeopleFill, BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdBusinessCenter, MdLocationOn } from "react-icons/md";

export default function ContactCard({ business, admin, register }) {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10  p-5 bg-white rounded-lg shadow">
      <div>
        {(business && <MdBusinessCenter className="text-primary text-3xl" />) ||
          (admin && <MdLocationOn className="text-primary text-3xl" />) ||
          (register && <MdLocationOn className="text-primary text-3xl" />) || (
            <BsFillPeopleFill className="text-primary text-3xl" />
          )}
      </div>
      <div className="text-primary">
        <h2 className="text-slate-800 mb-3">
          {(business && "Business Support") ||
            (admin && "Admin Office") ||
            (register && "Register Office") ||
            "Customer Care"}
        </h2>
        <div className="flex items-center gap-3">
          <BsTelephoneFill />
          <p>+87 691641234</p>
        </div>
        <div className="flex items-center gap-3">
          <MdEmail />
          <p>customercare@unimoniindia.com</p>
        </div>
        <div className="flex items-center gap-3">
          <BsWhatsapp />
          <p>+87 691641234</p>
        </div>
      </div>
    </div>
  );
}
