import React, { useState, useEffect } from "react";

 function BitCoin(props) {
  // React Hooks for state
  const [bitcoinData, setBitcoinData] = useState({
    "bpi": {
        "USD": {
            "code": "",
            "symbol": "",
            "rate": "",
            "description": "",
            "rate_float": null
        },
    }
  });

  // Function for fetching the data
  async function fetchData() {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(url);
    const json = await response.json();
    setBitcoinData(data => json);
  }

  // Fetch the data when the component first renders
  useEffect(() => {
    fetchData();
  }, []);

  // Set the JSON to a string for pretty formatting in the HTML
  const payload = JSON.stringify(bitcoinData, null, 4);

  // Render the HTML
  return (
    <div className="MyComponent">
      <h1>Bitcoin Data</h1>
      <h4>USD: ${bitcoinData.bpi.USD.rate}</h4>
      {/* <pre>{payload}</pre> */}
    </div>
  );
}

export default BitCoin;