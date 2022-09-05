import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import EditableField from './EditableField';

class InvoiceItemMaterials extends React.Component {
  render() {
    var onItemizedItemEdit = this.props.onItemizedItemEdit;
    var currency = this.props.currency;
    var rowDel = this.props.onRowDel;
    var itemTable = this.props.matItems.map(function(item) {
      return (
        <ItemRow onItemizedItemEdit={onItemizedItemEdit} item={item} onDelEvent={rowDel.bind(this)} key={item.id} currency={currency}/>
      )
    });
    return (
      <div className='material-table'>
        <Table>
          <thead>
            <tr >
              <th>Cod Art.</th>
              <th>Descriere</th>
              <th>UM</th>
              <th>Cant</th>
              <th>Preț fără TVA</th>
              <th>Val fără TVA</th>
              <th>Val cu TVA</th>  
            </tr>
          </thead>
          <tbody>
            {itemTable}
          </tbody>
        </Table>
        <Button className="button-add fw-bold" onClick={this.props.onRowAdd}>+</Button>
      </div>
    );

  }

}
class ItemRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.item);
  }
  render() {
    return (
      <tr>
        <td style={{width: '10%'}} >
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            type: "text",
            name: "name",
            value: this.props.item.name,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '40%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            type: "text",
            name: "description",
            placeholder: "Item description",
            value: this.props.item.description,
            id: this.props.item.id
          }}/>
        </td>
        <td style={{width: '10%'}}>
          <EditableField
          onItemizedItemEdit={this.props.onItemizedItemEdit}
          cellData={{
            type: "text",
            name: "um",
            value: this.props.item.um,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '10%'}}>
          <EditableField
          onItemizedItemEdit={this.props.onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: this.props.item.quantity,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '10%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: this.props.item.price,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '10%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            type: "number",
            name: "valfTVA",
            textAlign: "text-end",
            value: this.props.item.price*this.props.item.quantity,
            editable :false,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{width: '20%'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            type: "number",
            name: "valcuTVA",
            textAlign: "text-end",
            value:(this.props.item.price*this.props.item.quantity)+this.props.item.price*this.props.item.quantity*this.props.item.taxRate/100,
            editable :false,
            id: this.props.item.id,
          }}/>
        </td>
        <td className="del-button text-center" style={{width: '10%',paddingTop:'3px'}}>
          <BiTrash className="button-remove text-white mt-1 btn btn-danger" onClick={this.onDelEvent.bind(this)} style={{height: '30px', width: '30px', padding: '5.5px'}} />
        </td>
      </tr>
    );

  }

}

export default InvoiceItemMaterials;