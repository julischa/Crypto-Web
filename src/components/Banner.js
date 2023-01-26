import React from 'react'
import { useState, useEffect } from "react";

const Banner = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`
        );
        const coins = await response.json();
        setCoins(coins);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    

      <div className='wrapper'>
          <div className="banner">
            {coins.map((coin, index) => (
            <article key={index}>
                <span>{coin.symbol}</span><br></br>
                <span className={
                  coin.price_change_percentage_24h < 0
                    ? "change-negative"
                    : "change-positive"
                }
                >
                        {coin.price_change_percentage_24h.toFixed(1)}
                </span>
            </article>
        ))}
          </div>
      </div>

  )
}

export default Banner