import React from 'react'
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import './index.css';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin`);
                const coins = await response.json();
                setCoins(coins);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    function CoinCarousel() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <>
              {Array.isArray(coins) && coins.length > 0 && (
                <Slider {...settings}>
                  {coins.map((coin, index) => (
                      <div key={index}>
                          <h3>{coin.name}</h3>
                          <p>{coin.current_price} USD</p>
                          <img src={coin.image} alt={coin.name} />
                      </div>
                  ))}
                </Slider>
              )}
            </>
        );
    }

    return <CoinCarousel />
}

export default Coins
