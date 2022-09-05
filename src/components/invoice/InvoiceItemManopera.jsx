import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import EditableField from './EditableField';

class InvoiceItemManopera extends React.Component {
  render() {
    var onItemizedItemEdit = this.props.onItemizedItemEdit;
    var currency = this.props.currency;
    var itemTable = this.props.manItems.map(function(item) {
      return (
        <ItemRow onItemizedItemEdit={onItemizedItemEdit} item={item} key={item} currency={currency}/>
      )
    });
    return (
      <div className='manopera-table'>
        <Table>
          <thead>
            <tr >
              <th>Descriere</th>
              <th>Tarif</th>
              <th>Cant</th>
              <th>Val fără TVA</th>  
              <th>Val cu TVA</th>  
            </tr>
          </thead>
          <tbody>
            {itemTable}
          </tbody>
        </Table>
      </div>
    );

  }

}
class ItemRow extends React.Component {

  render() {
    return (
      <tr>
       
        <td style={{width: '40%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}            
            cellData={{
            type: "text",
            name: "manDescription",
            placeholder: "Item description",
            value: this.props.item.manDescription,
            id: this.props.item.id
          }}/>
        </td>  
        <td style={{width: '10%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}            
            cellData={{
            type: "number",
            name: "tarif",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: this.props.item.tarif,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '10%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}          
            cellData={{
            type: "number",
            name: "manQuantity",
            min: 1,
            step: "1",
            value: this.props.item.manQuantity,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '10%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}            
            cellData={{
            type: "number",
            name: "manValfTVA",
            textAlign: "text-end",
            value: this.props.item.tarif*this.props.item.manQuantity,
            editable :false,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '20%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}            
            cellData={{
            type: "number",
            name: "manValcuTVA",
            textAlign: "text-end",
            value:(this.props.item.manQuantity*this.props.item.tarif)+this.props.item.manQuantity*this.props.item.tarif*this.props.item.taxRate/100,
            editable :false,
            id: this.props.item.id,
          }}/>
        </td>
       
      </tr>
    );

  }

}

export default InvoiceItemManopera;