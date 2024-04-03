import { useEffect, useState } from "react";
import "./App.css";
import Calculationfield from "./components/Calculationfield";
import Inputfields from "./components/Inputfields";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(null);
  const [tip, setTip] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      const calculatedTip = bill * (tip / 100);
    const totalBill = parseFloat(bill) + parseFloat(calculatedTip);
    const billPerPerson = totalBill;

    setCalculatedTip(calculatedTip);
    setTotal(billPerPerson);
    }
  }, [bill, people, tip, calculatedTip]);

  function handleResetBtn() {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }
  return (
    <div className="app">
      <div className="title">
        <span>SPLT</span>
        <span>TTER</span>
      </div>
      <div className="container">
        <Inputfields
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tip={tip}
          setTip={setTip}
        />
        <Calculationfield
          total={total}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
          people={people}
        />
      </div>
    </div>
  );
}

export default App;
