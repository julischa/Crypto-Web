import React, { createContext, useState, useEffect } from "react";

const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`
        );
        const data = await response.json();
        setCoinData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <CoinContext.Provider value={{ coinData }}>
      {props.children}
    </CoinContext.Provider>
  );
};

export { CoinContextProvider, CoinContext };
