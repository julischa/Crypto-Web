import React from "react";
import { useState, useEffect } from "react";

const Coin = () => {
  const [coin, setCoin] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`
        );
        const coins = await response.json();
        setCoin(coins[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{coin.name}</h2>
        <h3>{coin.symbol}</h3>
      </div>
      <div className='card-body'>
        <p>Price: {coin.current_price} $</p>
        <p>24h Volume: {coin.total_volume} $</p>
      </div>
    </div>
  );
};

export default Coin;
