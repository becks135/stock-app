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
  const[searchInput, setSearchInput] = new useState(null);

  useEffect(()=> {  
    if(searchInput){
      const fetchData = async(searchQuery) => {
        let data = await iexApi.searchForSymbol(searchQuery);
        setStockSymbol(data[0].symbol);
      }
      fetchData(searchInput);
    }
  },[searchInput,setStockSymbol])


  const doSomething = (e) => {
    e.preventDefault();
    const userQuery = document.getElementById("stockInput").value;
    setSearchInput(userQuery);
    console.log(stockSymbol);
  }


    return (
      <div className="App">
        <h1>Stock App</h1>
  

        <form onSubmit={(e)=>{
            doSomething(e);
            setDisplay(true);
          }}>
          <input 
            type="text"
            id="stockInput"
          />
          <button type='submit'>Go</button>
        </form>

      {(display&&stockSymbol)?
      <>
        <p>{stockSymbol}</p>
        <HistoricalChart symbol={stockSymbol} range="1w"/>
      </>
      :
        <TrendList trendType="gainers"/>
      }
    
      </div>
    );
}

export default App;
