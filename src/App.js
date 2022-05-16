//styles
import './App.css';

//modules
import { useState, useEffect } from 'react';
import iexApi from './modules/iexApi';

//components
import TrendList from './Components/TrendList';
import HistoricalChart from './Components/HistoricalChart';

function App() {

  const [display, setDisplay] = new useState(false);
  const[stockSymbol, setStockSymbol] = new useState("");
  const[historicalPrices, setHistoricalPrices] = new useState([]);

  useEffect(()=> {  
    const fetchData = async(searchQuery) => {
      let data = await iexApi.searchForSymbol(searchQuery);
      setStockSymbol(data[0].symbol);

      setHistoricalPrices(await iexApi.getHistoricalPrices("SPY"));
      
    }
    fetchData("Netflix");
  },[])

console.log({historicalPrices});

const doSomething = (e) => {
  e.preventDefault();
  setDisplay(true);
  console.log(display);
}


    return (
      <div className="App">
        <h1>Stock App</h1>
        <h2>{stockSymbol}</h2>

        <form onSubmit={(e)=>{doSomething(e)}}>
          <input type="text"/>
          <button type='submit'>Go</button>
        </form>

      {display?
      <>
        <p>I'm here</p>
        <HistoricalChart symbol="AAPL" range="1w"/>
      </>
      :
        <TrendList trendType="gainers"/>
      }
    
      </div>
    );
}

export default App;
