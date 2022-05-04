import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export const FeaturedProducts = () => {
    const FundCard = [
        {
        
          title: "Funded Projects",
          head: "1024",
        },
        {
        
          title: "Unique Participants",
          head: "29,455",
        },
        {
         
          title: "Raised Capital",
          head: "$41,964,504",
        },
      ];


    const [data, setData] = useState({
        Name: "MeeraJoshi",
        ID:"201",
    },
    
    
    );

   // console.log("data ",data.Name)

   
  return (
    <>
    
   <div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Latest Productsdddddddddddddddddddddddddddddd</h2>
           <Link to="detail">view all products <i className="fa fa-angle-right" />Deails</Link>
          </div>
        </div>
         <Outlet /> 

         <div>State data
         Name: {data.Name}
         </div>
        {FundCard.map((item, index) => (
                
        <div className="col-md-4">
        <div className="product-item">
          <a href="#"><img src="images/product_01.jpg" alt /></a>
          <div className="down-content">
          <h4>{item.title}</h4>
                          <p>{item.head}</p>
            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
            <span>Reviews (24)</span>
          </div>
        </div>
      </div>
                  ))}


        <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="images/product_01.jpg" alt /></a>
            <div className="down-content">
              <a href="#"><h4>Tittle goes herehjhhhjhhjhhjhj</h4></a>
              <h6>$25.75</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>
              <span>Reviews (24)</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="images/product_02.jpg" alt /></a>
            <div className="down-content">
              <a href="#"><h4>Tittle goes here</h4></a>
              <h6>$30.25</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>
              <span>Reviews (21)</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="images/product_03.jpg" alt /></a>
            <div className="down-content">
              <a href="#"><h4>Tittle goes here</h4></a>
              <h6>$20.45</h6>
              <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>
              <span>Reviews (36)</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="images/product_04.jpg" alt /></a>
            <div className="down-content">
              <a href="#"><h4>Tittle goes here</h4></a>
              <h6>$15.25</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>
              <span>Reviews (48)</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="images/product_05.jpg" alt /></a>
            <div className="down-content">
              <a href="#"><h4>Tittle goes here</h4></a>
              <h6>$12.50</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>
              <span>Reviews (16)</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="images/product_06.jpg" alt /></a>
            <div className="down-content">
              <a href="#"><h4>Tittle goes here</h4></a>
              <h6>$22.50</h6>
              <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>
              <span>Reviews (32)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
