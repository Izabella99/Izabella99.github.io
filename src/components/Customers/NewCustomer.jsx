import React,  { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function NewCustomer({childToParent,...props}) {  
 
    const [name, setName] = useState('')
    const [cnpcui, setCnpcui] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')



    return (
      <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header>
            <Modal.Title>Client nou</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Nume</Form.Label>
              <Form.Control as="input" rows={3} value={name} onChange={e => setName(e.target.value)}  />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>CNP/CUI</Form.Label>
              <Form.Control as="input" rows={3} value={cnpcui} onChange={e => setCnpcui(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Adresa</Form.Label>
              <Form.Control as="input" rows={3} value={address} onChange={e => setAddress(e.target.value)}  />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Nr telefon</Form.Label>
              <Form.Control as="input" rows={3} value={phone} onChange={e => setPhone(e.target.value)}   />
            </Form.Group>
          </Form>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary" onClick={() => childToParent(name,cnpcui,address,phone)}>Add</Button>
      </Modal.Footer>
    </Modal>
      </>
    );
  }
  
