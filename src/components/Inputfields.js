import React, { useState, useEffect } from "react";

function Inputfields({bill,setBill,people,setPeople,tip,setTip}) {

    function handleSelectedTip(e){
        setTip(e.target.value)
    }
  return (
    <div className="form">
      {/* Bill amount */}
      <div className="lable-group">
        <label className="lable" htmlFor="bill">Bill</label>
        <div className="number-wrapper">
        <i className="fa-solid fa-dollar-sign"></i>
        <input  inputMode="nummeric" className="number-input" id="bill" onChange={(e)=>setBill(e.target.value)} value={bill} placeholder="0"/>
        </div>
      </div>

      {/* tip section */}
      <div className="tip-section">
        <p className="lable">Selected Tip %</p>
        <div className="tip-amount-wraper">
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip}  id="input1" name="tip" value="5" />
            <label className="tip-btn" htmlFor="input1">5%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip}  id="input2" name="tip" value="10" />
            <label className="tip-btn" htmlFor="input2">10%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip}  id="input3" name="tip" value="15" />
            <label className="tip-btn" htmlFor="input3">15%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip}  id="input4" name="tip" value="25" />
            <label className="tip-btn" htmlFor="input4">25%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input5" name="tip" value="50" />
            <label className="tip-btn" htmlFor="input5">50%</label>
          </div>
          <input inputMode="nummeric" className="tip-input" name="tip" onInput={handleSelectedTip} placeholder="Custom" />
        </div>
      </div>
{/*number of people  */}
      <div className="lable-group">
        <div className="lable-wraper">
          <label className="num-of-people" htmlFor="people">Number of People</label>
          <span className="error">{people ==0 ? "Can't be zero" : ""}</span>
        </div>
        <i className="fa-solid fa-user" ></i>
        <input inputMode="nummeric" className="number-input" id="people" onChange={(e)=>setPeople(e.target.value)} value={people} placeholder="0"/>
      </div>
    </div>
  );
}
export default Inputfields;
