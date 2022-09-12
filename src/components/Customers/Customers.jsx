import React, {useState, useEffect} from 'react';

function Customers() {
  const [customers, setCustomers] = useState(false);
  useEffect(() => {
    getCustomer();
  }, []);
  function getCustomer() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setCustomers(data);
      });
  }
  function createCustomer() {
    let name = prompt('Enter customer name');
    let cnpcui = prompt('Enter customer cnpcui');
    let address = prompt('Enter customer address');
    let phone = prompt('Enter customer phone');

    fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,cnpcui,address,phone}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getCustomer();
      });
  }
  function deleteCustomer() {
    let id = prompt('Enter customer id');
    fetch(`http://localhost:3001/customers/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getCustomer();
      });
  }
  return (
    <div>
      {customers ? customers : 'There is no customer data available'}
      <br />
      <button onClick={createCustomer}>Add customer</button>
      <br />
      <button onClick={deleteCustomer}>Delete customer</button>
    </div>
  );
}
export default Customers;