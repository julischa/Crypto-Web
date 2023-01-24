import React from 'react'
import { useState, useEffect } from 'react';

const CoinsPage = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`);
                const coins = await response.json();
                setCoins(coins);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
        <table className="table mx-auto table-centered">
  <thead className='thead'>
                    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col">Price</th>
      <th scope="col">24h Volume</th>
      <th scope="col">OHLC</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {coins.map((coin, index) => (
        <tr key={index}>
        <th>☆</th>
        <th scope="row">{coin.name}</th>
        <td>{coin.symbol}</td>
        <td>{coin.current_price} $</td>
        <td className={coin.price_change_percentage_24h < 0 ? 'change-negative' : 'change-positive'}>{coin.price_change_percentage_24h.toFixed(2)} %</td>
        <td><span>-</span></td>
        <td><button className='btn'>Trade</button></td>
      </tr>
    ))}
  </tbody>
</table>
            </div>
    );
}

export default CoinsPage
