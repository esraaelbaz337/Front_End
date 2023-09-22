import React from "react";

const ProductsPage = () => {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <ul>
        <li>
          <div className="product" style={{width:"100px",margin:"50px",}}>
            <img src="../Images/Phones/1.jpg" alt="Product 1" />
            <p>
              Redmi XIAOMI Redmi 12 - 6.79-inch 128GB/8GB Dual SIM Mobile Phone
              - Midnight Black Brand: Redmi | Similar products from Redmi EGP
              7,499.00
            </p>
          </div>
        </li>
        <li>
          <div className="product">
            <img src="../Images/Phones/2.jpg" alt="Product 2" />
            <p>
              Redmi XIAOMI Redmi 12C - 3GB/ 64GB Dual Sim 4G LTE- Gray - Local
              Version Brand: Redmi | Similar products from Redmi EGP 4,499.00
            </p>
          </div>
        </li>
        <li>
          <div className="product">
            <img src="../Images/Phones/3.jpg" alt="Product 3" />
            <p>
              Redmi Note 11 - 6.43 Inch 128GB/4GB Dual Sim 4G Mobile Phone -
              Graphite Gray Brand: Redmi | Similar products from Redmi EGP
              6,349.00
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductsPage;
