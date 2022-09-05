import React from 'react';
import SidebarMenu from './SidebarMenu';
import InvoiceForm from './invoice/InvoiceForm';

class Home extends React.Component {
    render() {
        return(
            <div>
                <SidebarMenu/>
                <InvoiceForm/>
            </div>
        )
    }
}

export default Home;