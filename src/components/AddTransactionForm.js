import React,{useState} from "react";

function AddTransactionForm({onAddAccount}) {

  const[formData, setFormData] = useState({
    date : '',
    description : '',
    category : '',
    amount : ''
  })

  function onSubmit (e) {
    e.preventDefault()
    fetch('http://localhost:8001/transactions', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(resp => resp.json())
  .then((data) => {onAddAccount(data) 
    console.log(formData)
    setFormData({
      date : '',
    description : '',
    category : '',
    amount : ''
    })
  })
}

function handleChange(e) {
  setFormData({...formData, [e.target.name] : e.target.value})
}



  return (
    <div className="ui segment">
      <form className="ui form" onSubmit = {onSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
