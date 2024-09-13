import React, { createContext, useState } from "react";
import { useContext } from "react";

export const amountData = createContext();

export const Context = (props) => {
  const [data, setData] = useState([]);

  return (
    <amountData.Provider value={[data, setData]}>
      {props.children}
    </amountData.Provider>
  );
};

export default Context;
