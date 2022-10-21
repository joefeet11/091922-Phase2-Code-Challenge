import React from "react";
import Transaction from "./Transaction";

function TransactionsList({accountData}) {
  const accountList = accountData.map((account) => (
    <Transaction key={account.id} account={account} />))
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {accountList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
