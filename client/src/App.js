import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import "./App.css";
import api from "./components/api";
import Favorites from "./components/Favorites";

//parent component
function App() {
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    api
      .get("/stocks")
      .then((res) => setItems(res.data.stocks))
      .catch((err) => console.log(err));
  }, [items]);

  useEffect(() => {
    api
      .get("/favorites")
      .then((res) => setFavorites(res.data.favorites))
      .catch((err) => {
        console.log(err);
      });
  }, [updated]);

  // handles adding stocks to favorites
  const handleAdd = (item) => {
    api
      .post(`/favorites`, item)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((res) => console.log(res));
  };

  // handles remove stocks from favorites
  const handleDelete = (symbol) => {
    api
      .delete(`/favorites/${symbol}`)
      .then((res) => setUpdated(!updated))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <header>
        <h1>Stocks App</h1>
      </header>

      <div className="stocks">
        <h1 className="title">Most Active Stocks</h1>
        <ItemList className="list" items={items} handleAdd={handleAdd} />
      </div>
      <div className="favorites">
        <h1 className="title">Favorites</h1>
        <Favorites favorites={favorites} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
