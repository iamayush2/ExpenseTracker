import React, { useContext } from "react";
import { amountData } from "../Contest/Context";

const ExpDisplay = ({ obj }) => {
  return (
    <div className="w-full flex bg-zinc-50 border-black border-l-2 shadow-lg ">
      <div
        className={`flex w-[100%] justify-between p-2 border-r-8 ${
          obj.amount > 0 ? "border-green-500" : "border-red-500"
        } `}
      >
        <p>{obj.detail}</p>
        <p>{obj.amount}</p>
      </div>
    </div>
  );
};

export default ExpDisplay;
