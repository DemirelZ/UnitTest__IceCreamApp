import React from "react";

const Card = ({ scoop, setBasket, basket }) => {

    
  const found = basket.filter((item) => item.name === scoop.name);
  const amount = found.length;

  const handleReset = () => {
    const clearArr = basket.filter((item) => item.name !== scoop.name);
    setBasket(clearArr);
  };

  return (
    <div
      style={{ width: "150px" }}
      className="d-flex flex-column gap-2 align-items-center"
    >
      <img className="img-fluid" src={scoop.imagePath} />
      <label>{scoop.name}</label>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-danger" onClick={handleReset}>
          Sıfırla
        </button>
        <span className="fs-2">{amount}</span>
        <button
          className="btn btn-success"
          onClick={() => setBasket([...basket, scoop])}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
