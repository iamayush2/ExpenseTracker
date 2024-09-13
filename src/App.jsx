import React from "react";
import Balance from "./Comoponent/Balance";
import Display from "./Comoponent/Display";
import History from "./Comoponent/History";
import NewTransaction from "./Comoponent/NewTransaction";

const App = () => {
  return (
    <div className="container flex   bg-zinc-50 mx-auto p-20">
      <div className="flex flex-col w-[67%] items-center ">
        <h1>Expence Tracker</h1>
        <Balance />
        <Display />
        <NewTransaction />
      </div>

      <History />
    </div>
  );
};

export default App;
