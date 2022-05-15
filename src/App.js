import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component, useEffect } from "react";

function App() {

  const useSandbox = true;
  let iexUrl;
  let iexToken;

  if (useSandbox) {
    iexUrl = "https://sandbox.iexapis.com/stable";
    iexToken = process.env.REACT_APP_IEX_TOKEN_SANDBOX;
  } else {
    iexUrl = "https://cloud.iexapis.com/stable";
    iexToken = process.env.REACT_APP_IEX_TOKEN_REAL;
  }

const getQuote = (symbol) => {

  axios({
    url: `${iexUrl}/stock/${symbol}/quote`,
    method: "GET",
    dataResponse: "json",
    params: {
      token: iexToken,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
};

console.log(process.env.REACT_APP_IEX_TOKEN_SANDBOX)

useEffect(()=>{
  getQuote("AAPL");
},[])

//   $.ajax({
//     url: `${app.IEX_URLBASE}/stock/${symbol}/quote`,
//     method: "GET",
//     dataType: "json",
//     data: {
//       token: app.IEX_TOKEN,
//     },
//   })
//     .then((quoteInformation) => {
//       app.$stockPrice.text(`$${quoteInformation.latestPrice}`);
//       const priceChange = quoteInformation.change.toFixed(2);
//       const priceChangePct = (quoteInformation.changePercent * 100).toFixed(2);
//       app.$priceMovement.text(`$${priceChange} (${priceChangePct}%)`);
//       //change the style of price movement displayed to reflect gain or loss
//       if (priceChange < 0) {
//         app.$priceMovement.css("background-color", "#FCE8E6");
//         app.$priceMovement.css("color", "#A61212");
//       } else {
//         app.$priceMovement.css("background-color", "#E6F4EA");
//         app.$priceMovement.css("color", "#479260");
//       }
//       app.$closingDate.text(`At close: ${quoteInformation.latestTime}`);
//     })
//     .catch(() => {
//       //if search returns no results, display error message
//       app.$errorMessage.css("visibility", "visible");
//       app.$quoteInformation.css("visibility", "hidden");
//     });
// };

  return (
    <div className="App">
      <p>{iexToken}</p>
    </div>
  );
}

export default App;
