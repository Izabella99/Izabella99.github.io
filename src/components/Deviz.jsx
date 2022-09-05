import React from 'react';
import SidebarMenu from './SidebarMenu';
import InvoiceForm from './invoice/InvoiceForm';

class Deviz extends React.Component {
    render() {
        return(
            <div>
                <SidebarMenu/>
                <InvoiceForm/>
            </div>
        )
    }
}

export default Deviz;