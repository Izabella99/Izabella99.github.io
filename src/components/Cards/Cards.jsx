import "../../assets/Cards.css";
import Card from "./Card";
import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    
    const data=[
      {id:1,title:"Comandă",link:"/"},
      {id:2,title:"Deviz",link:"/deviz"},
      {id:3,title:"Factură",link:"/"},
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
                />
              );
            })}
          </div>
          </div>
      </>
    );
  }
}
