import React from "react";
import { useState, useEffect } from "react";
import ChatRoom from './ChatRoom';

const CoinsPage = () => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

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
    <div>
          {selectedCoin ? (
            <ChatRoom coin={selectedCoin} />
          ) : (
            <div className='table'>
              <table className="mx-auto w-75 table-hover">
                <thead className="thead">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Coin</th>
                    <th scope="col"></th>
                    <th scope="col">Price</th>
                    <th scope="col">24h Volume</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, index) => (
                    <tr key={index}>
                      <th className='star'>☆</th>
                      <th scope="row">{coin.name}</th>
                      <td>{coin.symbol}</td>
                      <td
                        className={
                          coin.current_price < 0
                        }
                      >
                        {coin.current_price.toFixed(1)} $
                      </td>
                      <td
                        className={
                          coin.price_change_percentage_24h < 0
                            ? "change-negative"
                            : "change-positive"
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(1)} %
                      </td>
                      <td>
                        <button className='btn-2' onClick={() => setSelectedCoin(coin)}>Prediction</button>
                      </td>
                      <td>
                        <button className='btn-2'>Trade now</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
    </div>
  );
};

export default CoinsPage;
