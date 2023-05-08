import React from "react";
import "./ItemList.css";
import api from "./api";

function ItemList({ items, handleAdd }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.symbol}</td>
            <td>{item.companyName}</td>
            <td>{item.latestPrice}</td>
            <td>
              <button className="button" onClick={() => handleAdd(item)}>
                Add to Favs
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
