import React from 'react';

function Favorites({favorites, handleDelete}) {



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
      {favorites.map(item => (
        <tr key={item.id}>
          <td>{item.symbol}</td>
          <td>{item.companyName}</td>
          <td>{item.latestPrice}</td>
          <td><button className="button" onClick={() => handleDelete(item.symbol)}>Remove</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default Favorites;