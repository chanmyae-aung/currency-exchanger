import React from "react";
import {
  BsBuildingsFill,
  BsFillPeopleFill,
  BsDatabaseFillLock,
} from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

export default function AboutCard({ business, admin, register }) {
  return (
    <div className="flex w-full gap-10 items-center  p-5 px-10 bg-white rounded-lg shadow">
      <div>
        {(business && (
          <BsBuildingsFill className="text-primary text-[3rem]" />
        )) ||
          (admin && <TfiWorld className="text-primary text-[3rem]" />) ||
          (register && (
            <BsDatabaseFillLock className="text-primary text-[3rem]" />
          )) || <BsFillPeopleFill className="text-primary text-[3rem]" />}
      </div>
      <div className="text-slate-700">
        <h2 className="text-slate-800 mb-3">
          {(business && "Safeguarded with leading bank") ||
            (admin && "Regulated around the world") ||
            (register && "Data protection") ||
            "Extra secure transactions"}
        </h2>
        <p>
          {
             business && "We are regulated by authorities around the world. This includes the FCA in the UK and the FinCEN in the US"
           || admin && "We use two factor authentication to protect your account and transactions. That means you - and only you - can get your money"
           || register && "We are committed to keeping your personal data safe. And we are transparent to how we collect process and storage it"
          || "We hold your money with established financial institutions. Saudi separate from our own accounts and in our normal course of business not accessible to or partners"
           
          }
        </p>
      </div>
    </div>
  );
}
