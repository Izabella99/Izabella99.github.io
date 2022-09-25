import "../../assets/Cards.css";
import Card from "./Card";
import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      customers: [],
      customersNo:"",
    };
  }
  
  componentDidMount() {
    this.getCustomer();
  }

 getCustomer() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
     
      })
      .then(customers => {
        this.setState({customers: customers})
        this.setState({customersNo:Object.keys(customers).length})
      });
  }


  render() {
    
    const data=[
      {id:1,title:"Comandă",link:"/"},
      {id:2,title:"Deviz",link:"/deviz"},
      {id:3,title:"Clienți",customersNo:this.state.customersNo,link:"/customers"},
      {id:4,title:"ETC",link:"/"}];
  
    return (
      <>
          <div className="cards-container">
          <div className="cards">
            {data.map((x) => {
              return (
                <Card
                  key={x.id}
                  title={x.title}
                  link={x.link}
                  customersNo={x.customersNo}
                />
              );
            })}
          </div>
          </div>
      </>
    );
  }
}
