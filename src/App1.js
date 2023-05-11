import React from "react";
import MyNavbar from "./components/MyNavbar";
import ProductList from "./components/ProductList";

export default function App1() {
  const plist = [
    { price: 12345, name: "IPhone 10S Max", quantity: 10 },
    { price: 1234, name: "Redmi Note 10S Max", quantity: 190 },
  ];
  return (
    <div className="App1">
      <MyNavbar />
      <main className="container">
        <ProductList productList={plist} />
      </main>
    </div>
  );
}
