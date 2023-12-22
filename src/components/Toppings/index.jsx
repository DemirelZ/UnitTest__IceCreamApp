import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [toppings, setToppings] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3026/toppings")
      .then((res) => {
        setToppings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e, item) => {
    e.target.checked === true
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };

  return (
    <div className="container mt-5">
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi: 3 &#8378; </p>
      <h2>Soslar ücreti: {basket.length*3} &#8378; </h2>

      <div className="row gap-3 mt-4">
        {toppings.map((item) => (
          <div
            onClick={(e) => handleChange(e, item)}
            className="d-flex flex-column align-items-center rounded-4 pt-3 top-card "
          >
            <label htmlFor={item.name}>
              <img src={item.imagePath} alt={item.name} />
              <p>{item.name}</p>
            </label>
            <input id={item.name} type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
