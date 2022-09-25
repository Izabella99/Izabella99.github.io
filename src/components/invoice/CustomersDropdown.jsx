import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';

export default function CustomersDropdown({parentCallback,passSelectedCustomer}) {

    const [customers, setCustomers] = useState(false);
  
    const getInitialState = () => {
        const value = "";
        return value;
      };
    const [value, setValue] = useState(getInitialState);


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

    function getSelectedCustomer(value) {
      Object.values(customers).map((customer) => {
        if(customer.id==value){
          passSelectedCustomer(customer.name,customer.cnpcui,customer.address,customer.phone);
        }
      })
    }
  
    const handleChange = (e) => {
        setValue(e.target.value);
        parentCallback(e.target.value);
        getSelectedCustomer(e.target.value);
      };
 
  
  return (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      {Object.values(customers).map((customer, index) => {
            return (
                <option value={customer.id}>{customer.name}</option>
            );
          })
          } 
    </Form.Select> 
  );
}
