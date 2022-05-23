//modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iexApi from "../modules/iexApi";

//components
import IndexesEtfs from "./IndexesEtfs";
import StockDetails from "./StockDetails";
import TrendList from "./TrendList";


function Home(){
   
    const [display, setDisplay] = new useState(false);
    const [stockSymbol, setStockSymbol] = new useState("");
    const [searchInput, setSearchInput] = new useState(null);

    useEffect(() => {
    if (searchInput) {
        const fetchData = async (searchQuery) => {
            let data = await iexApi.searchForSymbol(searchQuery);
            setStockSymbol(data[0].symbol);
            console.log({stockSymbol})
        };
        fetchData(searchInput);
    }
    }, [searchInput, setStockSymbol]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userQuery = document.getElementById("stockInput").value;
        setSearchInput(userQuery);
    };


    return (
      <>
        <h1>Welcome Home</h1>
        <Link to="/">Sign In</Link>
        {/* <IndexesEtfs /> */}

        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
            setDisplay(true);
          }}
        >
          <input type="text" id="stockInput" />
          <button type="submit">Go</button>
        </form>

        {display && stockSymbol ? (
          <StockDetails symbol={stockSymbol} />
        ) : (
          <TrendList trendType="losers" />
        )}
      </>
    );
}

export default Home;