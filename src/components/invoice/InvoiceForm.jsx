import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceItemMaterials from './InvoiceItemMaterials';
import InvoiceItemManopera from './InvoiceItemManopera';
import logo from '../../logo.jpg'; 
import '../../assets/InvoiceStyle.css';

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currency: 'Lei',
      currentDate: '',
      invoiceNumber: 1,
      dateOfIssue: '',
      billTo: '',
      billToCNP: '',
      billToAddress: '',
      billToPhone: '',
      vehicleType:'',
      serial:'',
      motorType:'',
      licenseNumber:'',
      year:'',
      kmIndex:'',
      notes: '',
      total: '0.00',
      subTotal: '0.00',
      taxRate: '19',
      taxAmmount: '0.00',
    };
    this.state.matItems = [
      {
        id: 0,
        name: '',
        description: '',
        price: '1.00',
        quantity: 1,
        um:'buc',
        valfTVA:0,
        valcuTVA:0,
        taxRate:this.state.taxRate
      }
    ];
    this.state.manItems = [
      {
        manDescription:'',
        tarif:'1.00',
        manQuantity:1,
        manValfTVA:0,
        manValcuTVA:0,
        taxRate:this.state.taxRate
      }
    ];
    this.editField = this.editField.bind(this);
  }
  componentDidMount(prevProps) {
    this.handleCalculateTotal()
  }
  handleRowDel(matItems) {
    var index = this.state.matItems.indexOf(matItems);
    this.state.matItems.splice(index, 1);
    this.setState(this.state.matItems);
  };
  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var matItems = {
      id: id,
      name: '',
      price: '1.00',
      description: '',
      quantity: 1,
      um:'buc',
      valfTVA:0,
      valcuTVA:0,
      taxRate:this.state.taxRate
    }
    this.state.matItems.push(matItems);
    this.setState(this.state.matItems);
    this.handleCalculateTotal();
  }
  handleCalculateTotal() {
    var matItems = this.state.matItems;
    var manItems = this.state.manItems;
    var subTotal1 = 0;
    var subTotal2 = 0;
    var subTotal = 0;

    matItems.map(function(matItems) {
      //subTotal = parseFloat(subTotal + (parseFloat(items.price).toFixed(2) * parseInt(items.quantity))).toFixed(2)
      subTotal1 =subTotal1 + (matItems.price * matItems.quantity)
    });
    manItems.map(function(manItems) {
      subTotal2 =subTotal2 + (manItems.manQuantity *manItems.tarif)
    });

    subTotal=subTotal1+subTotal2;

    this.setState({
      subTotal: parseFloat(subTotal).toFixed(2)
    }, () => {
      this.setState({
        taxAmmount: parseFloat(parseFloat(subTotal) * (this.state.taxRate / 100)).toFixed(2)
      },() => {
          this.setState({
            total: (subTotal  + parseFloat(this.state.taxAmmount))
          });
      });
    });

  };
  onItemizedItemEdit(evt) {
    var matItem = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var matItems = this.state.matItems.slice();
    var newmatItems = matItems.map(function(matItems) {
      for (var key in matItems) {
        if (key == matItem.name && matItems.id == matItem.id) {
          matItems[key] = matItem.value;
        }
      }
      return matItems;
    });

    var manItem = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var manItems = this.state.manItems.slice();
    var newmanItems = manItems.map(function(manItems) {
      for (var key in manItems) {
        if (key === manItem.name ) {
          manItems[key] = manItem.value;
        }
      }
      console.log(manItem);
      console.log(manItems);
      return manItems;
    });
    this.setState({matItems: newmatItems,manItems: newmanItems});
    this.handleCalculateTotal();
  };
 
  editField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.handleCalculateTotal();
  };
 
  openModal = (event) => {
    event.preventDefault()
    this.handleCalculateTotal()
    this.setState({isOpen: true})
  };
  closeModal = (event) => this.setState({isOpen: false});
  render() {
    return (<Form onSubmit={this.openModal}>
      <Row  className="invoice">
      <Col />
        <Col md={8} lg={9}>
          <Card className="pageToPrint p-4 p-xl-5 my-3 my-xl-4 ">
            <div className="header d-flex flex-row align-items-start justify-content-between mb-3">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row align-items-center"   >
                    <div className="logoholder text-center">
                      <img src={logo} style={{maxWidth: '100px'}} alt="logo"/>
                    </div>
                  </div>
                </div>
                <div className="me" >
                    <p>
                      <strong>SC RELIA IMPEX SRL</strong><br/>
                      Porumbenii Mari nr. 421<br/>
                      537414 HARGHITA<br/>
                    </p>
                  </div>
                <div className="info">
                    <p>
                      Cod fiscal: RO14985920 <br/>
                      Nr. ord: J08/1462/2002 <br/>
                      Tel: 0748-50-28-23<br/>
                    </p>
                  </div>
            </div>
            <hr className="my-3"/>
           
            <Row className="client-data mb-5 ">
              <Col>
                <Form.Label className="fw-bold">Client:</Form.Label>
                <Form.Control placeholder={"Client"} rows={3} value={this.state.billTo} type="text" name="billTo" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required="required"/>
                <Form.Control placeholder={"CNP/CUI"} value={this.state.billToCNP} type="text" name="billToCNP" className="my-2" onChange={(event) => this.editField(event)} autoComplete="cnp" />
                <Form.Control placeholder={"Adresa"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} />
                <Form.Control placeholder={"Nr telefon"} value={this.state.billToPhone} type="text" name="billToPhone" className="my-2" autoComplete="phone" onChange={(event) => this.editField(event)} />
              </Col>
            </Row>

            <div className="nr-date d-flex flex-row align-items-start justify-content-between">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                 <span className="fw-bold me-2">Deviz&nbsp;Nr:&nbsp;</span>
                  <Form.Control type="number" value={this.state.invoiceNumber} name={"invoiceNumber"} onChange={(event) => this.editField(event)} min="1" style={{
                     maxWidth: '70px'
                    }} required="required"/>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">Data:</span>
                  <Form.Control type="date" value={this.state.dateOfIssue} name={"dateOfIssue"} onChange={(event) => this.editField(event)} style={{
                      maxWidth: '150px'
                    }} required="required"/>
              </div>
            </div>

            <Row className="car-data mb-5">
              <Form.Control placeholder={"Tip autovehicul"} rows={3} value={this.state.vehicleType} type="text" name="vehicleType" className="my-2" onChange={(event) => this.editField(event)}/>
               <Col> 
                <Form.Control placeholder={"Serie șasiu"} value={this.state.serial} type="text" name="serial" className="my-2" onChange={(event) => this.editField(event)} autoComplete="serial" />
                <Form.Control placeholder={"Tip motor"} value={this.state.motorType} type="text" name="motorType" className="my-2" autoComplete="motorType" onChange={(event) => this.editField(event)} />
              </Col>
              <Col>
                <Form.Control placeholder={"Nr inamtriculare"} rows={2} value={this.state.licenseNumber} type="text" name="licenseNumber" className="my-2" onChange={(event) => this.editField(event)}autoComplete="licenseNumber"/>
                <Form.Control placeholder={"An fabricație"} value={this.state.year} type="text" name="year" className="my-2" onChange={(event) => this.editField(event)} autoComplete="year" />
              </Col>
              <Col>
                <Form.Control placeholder={"Index km"} rows={1} value={this.state.kmIndex} type="text" name="kmIndex" className="my-2" onChange={(event) => this.editField(event)}autoComplete="kmIndex"/>
              </Col>
            </Row>         
           
            <div className="subtitle"><h4>Detaliere materiale</h4></div>
            <InvoiceItemMaterials onItemizedItemEdit={this.onItemizedItemEdit.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} currency={this.state.currency} matItems={this.state.matItems}/>
            <div className="subtitle"><h4>Detaliere manoperă</h4></div>
            <InvoiceItemManopera onItemizedItemEdit={this.onItemizedItemEdit.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} currency={this.state.currency} manItems={this.state.manItems}/>
            <Row className="mt-4 justify-content-end">
              <Col lg={6}>
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <span className="fw-bold">Subtotal:
                  </span>
                  <span>{this.state.subTotal} {this.state.currency}
                    </span>
                </div>
                <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                  <span className="fw-bold">TVA:
                  </span>
                  <span>
                    <span className="small ">({this.state.taxRate || 0}%)</span>
                    {this.state.taxAmmount || 0} {this.state.currency}</span>
                </div>
                <hr/>
                <div className="d-flex flex-row align-items-start justify-content-between" style={{
                    fontSize: '1.125rem'
                  }}>
                  <span className="fw-bold">Total:
                  </span>
                  <span className="fw-bold">
                    {this.state.total || 0} {this.state.currency}</span>
                </div>
              </Col>
            </Row>
            <hr className="my-4"/>
            <h5>CONDIȚII DE GARANȚIE: Unitatea noastră acodă garanție pentru lucrări de reparații conform Legii nr 449/2003 și anume : Pentru piesele furnizate de unitatea noastră termenul de garanție este de <textarea rows="1"/>
            . Pentru lucrările care nu au necesitat înlocuri de piese, termenul de garanție este <textarea rows="1"/>
            de la data recepției. Clientul se obligă să asigure o exploatare corectă a autovehiculului reparat în conformitate cu cerințele impuse de producător. Piesele și materialele aduse de client nu beneficiază de garanție.</h5>
            <div className="d-flex flex-row align-items-start justify-content-between mb-3">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                 <span className="fw-bold me-2">Lucrările corespund calitativ, ȘEF UNITATE</span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">Am preluat autovehiculul reparat, CLIENT</span>
              </div>
            </div>
          </Card>
        </Col>

        <Col>
          <div className="sticky-top pt-md-3 pt-xl-4">
          <Button variant="outline-primary" className="button-print d-block w-100 mt-3 mt-md-0"  onClick={() => window.print()}>
                  Save & Print
          </Button>
          </div>
        </Col>
        
      </Row>
    </Form>)
  }
}

export default InvoiceForm;