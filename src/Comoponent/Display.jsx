import React, { useContext } from "react";
import { amountData } from "../Contest/Context";

const Display = () => {
  const [data] = useContext(amountData);

  let income = 0;
  let expense = 0;
  data.map((e, i) => {
    if (Number(e.amount) > 0) {
      income = income + Number(e.amount);
    }
    if (Number(e.amount) < 0) {
      expense = expense + -Number(e.amount);
    }
  });

  return (
    <div className="flex w-[35%] mt-10 justify-around text-center p-3  bg-zinc-200 rounded-lg ">
      <div className="flex flex-col w-[50%]  text-center border-r-4 border-green-50">
        <p className="text-xl">Income</p>
        <p className="text-lg text-green-600 mt-1 font-semibold">${income}</p>
      </div>
      <div className="flex flex-col w-[50%] ">
        <p className="text-xl">Expense</p>
        <p className="text-lg text-red-600 mt-1 font-semibold">${expense}</p>
      </div>
    </div>
  );
};

export default Display;
