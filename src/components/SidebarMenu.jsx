
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaHome } from "react-icons/fa";
import { FiLogOut} from "react-icons/fi";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft} from"react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../assets/Sidebar.css";

import logo from '../logo.jpg'; 


const SidebarMenu = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
      {menuCollapse ? (
        <div className="closemenu collapsed"onClick={menuIconClick}><MdKeyboardArrowRight/></div>
        ):(
          <div className="closemenu "onClick={menuIconClick}><MdKeyboardArrowLeft/></div>
              )}
     
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
        
          <SidebarHeader>
           
          <div className="logo">
              {/* small and big change using menucollapse state */}
              {menuCollapse ? 
              (<img src={logo} style={{maxWidth: '50px'}} alt="logo"/>)
              :
              (<img src={logo} style={{maxWidth: '100px'}} alt="logo"/>)
              }
          </div>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem 
              icon={<FaHome />} >
                Home
                <Link to="/home" />
              </MenuItem>
              <MenuItem  icon={<HiDocumentText />} >
                Comanda
                <Link to="/comanda" />
              </MenuItem>
              <MenuItem icon={<HiDocumentText />}>Deviz</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Raduly Laszlo</MenuItem>
            </Menu>
          </SidebarFooter>
          
        </ProSidebar>
      </div>
    </>
  );
};

export default SidebarMenu;
