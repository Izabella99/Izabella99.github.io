import React, { Component } from "react";
import { Link} from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";
import "../../assets/Cards.css";

export default class Card extends Component {

  render() {
  
    return (
      <div className="dashboard-card" >
        <Link to={this.props.link} className="btn btn-primary">
        <div className="dashboard-card-body">
        <HiOutlineDocumentText className="icon" />
          <h2>{this.props.title}</h2>
        </div></Link>
      </div>
    );
  }
}
