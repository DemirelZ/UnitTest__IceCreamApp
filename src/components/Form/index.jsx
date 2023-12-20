import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
      <div className="terms">
        <p
          style={{ visibility: isHover ? "visible" : "hidden" }}
          className="bg-light text-black p-2 rounded"
        >
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
        <label htmlFor="" className="lead">
          Koşulları okudum ve kabul ediyorum
        </label>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-warning"
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
