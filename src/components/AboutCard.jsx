import React from "react";
import { BsBuildingsFill, BsFillPeopleFill, BsDatabaseFillLock} from "react-icons/bs";
import {TfiWorld} from 'react-icons/tfi'

export default function AboutCard({ business, admin, register }) {
  return (
    <div className="flex w-full gap-10 items-center  p-5 px-10 bg-white rounded-lg shadow">
      <div>
        {(business && <BsBuildingsFill className="text-primary text-[3rem]" />) ||
          (admin && <TfiWorld className="text-primary text-[3rem]" />) ||
          (register && <BsDatabaseFillLock className="text-primary text-[3rem]" />) || (
            <BsFillPeopleFill className="text-primary text-[3rem]" />
          )}
      </div>
      <div className="text-slate-700">
        <h2 className="text-slate-800 mb-3">
          {(business && "Safeguarded with leading bank") ||
            (admin && "Regulated around the world") ||
            (register && "Data protection") ||
            "Extra secure transactions"}
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur, perspiciatis optio maiores dolorem nesciunt repudiandae porro corrupti, modi reprehenderit vel.</p>
      </div>
    </div>
  );
}
