import React, { useState } from "react";

function App() {
  const [dollar, setDollar] = useState("");
  const [pound, setPound] = useState("");
  const [dirham, setDirham] = useState("");

  const convertCurrency = (amount, rate) => {
    return amount ? (amount * rate).toFixed(2) : "--";
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <form>
        <label>
          Dollar (USD):
          <input
            type="number"
            value={dollar}
            onChange={(event) => setDollar(event.target.value)}
          />
        </label>
        <br />
        <label>
          Pound (PND):
          <input
            type="number"
            value={pound}
            onChange={(event) => setPound(event.target.value)}
          />
        </label>
        <br />
        <label>
          Dirham (DHS):
          <input
            type="number"
            value={dirham}
            onChange={(event) => setDirham(event.target.value)}
          />
        </label>
      </form>
      <h1>
        <u>Conversion Results</u>
      </h1>
      <h2>Dollar to Rs: {convertCurrency(dollar, 83.12)}</h2>
      <h2>Pound to Rs: {convertCurrency(pound, 105.6)}</h2>
      <h2>Dirham to Rs: {convertCurrency(dirham, 22.63)}</h2>
    </div>
  );
}

export default App;
