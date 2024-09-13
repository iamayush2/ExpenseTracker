import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { amountData } from "../Contest/Context";

const NewTransaction = () => {
  const [data, setData] = useContext(amountData);

  const { register, handleSubmit, reset } = useForm();

  const submit = handleSubmit((d) => {
    setData((s) => [...s, d]);
    reset();
  });

  return (
    <div className="flex flex-col w-[35%] mt-5  p-2">
      <h1>Add Transactions</h1>

      <form className="mt-3 w-full flex flex-col gap-2  " onSubmit={submit}>
        <h1>Detail</h1>
        <input
          type="text"
          placeholder="Enter Detail"
          className="px-2 py-1 rounded-md w-[100%] shadow-md"
          {...register("detail")}
        />
        <h1>
          Amount <br /> (+ :Income , - :Expense )
        </h1>
        <input
          type="text"
          placeholder="Enter Amount"
          className="px-2 py-1 rounded-md w-[100%] shadow-md"
          {...register("amount")}
        />

        <input type="submit" className="p-2 bg-green-300 mt-4 w-[70%]" />
      </form>
    </div>
  );
};

export default NewTransaction;
