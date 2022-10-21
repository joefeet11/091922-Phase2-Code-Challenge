import React from "react";

function Transaction({account}) {
  
  return (
    <tr>
      <td>{account.date}</td>
      <td>{account.description}</td>
      <td>{account.category}</td>
      <td>{account.amount}</td>
    </tr>
  );
}

export default Transaction;
