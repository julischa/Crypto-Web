import React, { useContext } from "react";
import { CoinContext } from "../Context/CoinContext";

const Coin = () => {
const coin = useContext(CoinContext);

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