import React, { useState, useEffect, useContext } from "react";
import ChatRoom from "./ChatRoom";
//import { Modal } from "react-bootstrap";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const CoinsPage = () => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const navigate = useNavigate(); //navigate hook to reload and not trigger a full page reload

  //extract user from context
  const { user } = useContext(UserContext);
  console.log("user", user);

  const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const handleShow = (coin) => {
  //setSelectedCoin(coin);
  // setShow(true);
  //};

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
        <div className="table">
          <table onClick={handleShow} className="mx-auto w-75 table-hover">
            <thead className="thead">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">24h Volume</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => (
                <tr key={index} onClick={() => handleShow(coin)}>
                  <th className="star">☆</th>
                  <th scope="row">{coin.name}</th>
                  <td>{coin.symbol}</td>
                  <td
                    className={
                      coin.current_price < 0
                        ? "change-negative"
                        : "change-positive"
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
                    <button
                      className="btn-2"
                      onClick={() =>
                        user ? setSelectedCoin(coin) : navigate("/login")
                      }
                    >
                      Predict
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-2"
                      onClick={() =>
                        user ? setSelectedCoin(coin) : navigate("/login")
                      }
                    >
                      Trade
                    </button>
                  </td>
                  {/* <Modal show={show} size="lg" onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>
                        <h1>{coin.name}</h1>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Not working correctly yet</Modal.Body>
                  </Modal> */}
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

//{selectedCoin ? selectedCoin.symbol : ''}
//{selectedCoin ? selectedCoin.name : ''} > My App crashes and doesnt open.

//new component with all the coinpage info in there, including the modal
