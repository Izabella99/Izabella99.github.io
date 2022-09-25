import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import '../../assets/Customers.css';
import NewCustomer from './NewCustomer';
import {MdAddCircleOutline} from "react-icons/md";



function Customers() {
  const [customers, setCustomers] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
 
  useEffect(() => {
    getCustomer();
  }, []);

  function getCustomer() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
     
      })
      .then(data => {
        setCustomers(data);
      });
  }

  function createCustomer(name,cnpcui,address,phone) {
    
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

  const childToParent = (name,cnpcui,address,phone) => {

    console.log(name, cnpcui,address,phone);
    createCustomer(name,cnpcui,address,phone);
  }

  return (
    <>
    <Card className="customers-table-container p-4 p-xl-5 my-3 my-xl-4 ">
      <h1>Clienti</h1>
      <Button className="add-client modal-toggle" variant="contained" onClick={() =>{ setModalShow(true);}}><MdAddCircleOutline/>Adauga client nou</Button>
      <Table className='customers-table' hover responsive>  
        <thead>
          <tr>
            <th>id</th>
            <th>NUME</th>
            <th>CNP/CUI</th>
            <th>ADRESA</th>
            <th>NR. TELEFON</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(customers).map((customer, index) => {
            return (
            <>
              <tr>
                <td>{customer.id}</td>
                <td style={{fontWeight:700}}>{customer.name}</td>
                <td>{customer.cnpcui}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
              </tr>
            </>
            );
          })
          } 
        </tbody>
      </Table>
    </Card>
    <NewCustomer
        show={modalShow}
        onHide={() => setModalShow(false)}
        childToParent={childToParent}
      />
    </>
    
  );
}
export default Customers;