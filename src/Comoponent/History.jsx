import React, { useContext } from "react";
import ExpDisplay from "./ExpDisplay";
import { amountData } from "../Contest/Context";

function History() {
  const [data] = useContext(amountData);

  return (
    <div className="flex flex-col mt-6 w-[35%]  ">
      <h1>History</h1>

      <div className="flex flex-col gap-2  p-3 border-t-2 border-black">
        {data.length === 0 && <div>No Transactions Yet</div>}
        {data.map((e, i) => (
          <ExpDisplay obj={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default History;
