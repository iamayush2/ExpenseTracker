import React, { useContext } from "react";
import { amountData } from "../Contest/Context";

const Balance = () => {
  const [data] = useContext(amountData);
  let amnt = 0;
  data.map((e, i) => {
    amnt += Number(e.amount);
  });
  console.log(amnt);
  return (
    <div
      className={`w-[40%] ${
        amnt >= 0 ? "bg-green-500" : "bg-red-500"
      } flex  mt-5 text-center items-center p-5 justify-center gap-2`}
    >
      <h1 className="text-2xl">Wallet Balance:</h1>
      <h2 className="text-xl">${amnt}</h2>
    </div>
  );
};

export default Balance;
