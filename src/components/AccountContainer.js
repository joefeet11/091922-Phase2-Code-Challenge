import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



function AccountContainer() {
  const[accounts, setAccounts] = useState([])
  const[search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(resp => resp.json())
    .then((data) => setAccounts(data))
  }, [])
  
  function addAccount (newAccount) {
    setAccounts([...accounts, newAccount])
  }

  const filteredAccount = accounts.filter((account) => {
    return account.description.toLowerCase().includes(search.toLowerCase())
  })


  

  



  return (
    <div>
      <Search setSearch={setSearch}  search={search}/>
      <AddTransactionForm onAddAccount = {addAccount} />
      <TransactionsList  accountData = {filteredAccount} />
    </div>
  );
}

export default AccountContainer;
