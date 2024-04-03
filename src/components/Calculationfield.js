import React from "react";

function Calculationfield({handleResetBtn,total,calculatedTip,people}) {

  const returnCurrency = (amt) => new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(amt)
  return (
    <div className="display">
      <div className="display-group">
        <div className="display-row">
          <div className="display-label">
            <span className="header">Tip Amount</span>
            <span className="unit">/ person</span>
          </div>
          <div className="display-amt">
            <span className="value">
              {returnCurrency (`${calculatedTip ? calculatedTip: "0"}`)}
            </span>
          </div>
        </div>
        <div className="display-row">
          <div className="display-label">
            <span className="header">Total</span>
            <span className="unit">/ person</span>
          </div>
          <div className="display-amt">
            <span className="value">
              {returnCurrency (`${total ? total/people: "0"}`)}
              </span>
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleResetBtn}>Reset</button>
    </div>
  );
}

export default Calculationfield;
