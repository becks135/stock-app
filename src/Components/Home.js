//modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iexApi from "../modules/iexApi";

//components
import IndexesEtfs from "./IndexesEtfs";
import SearchBar from "./Searchbar";
import StockDetails from "./StockDetails";
import TrendList from "./TrendList";


function Home(){
   
    const [display, setDisplay] = new useState(false);
    const [stockSymbol, setStockSymbol] = new useState("");
    const [searchInput, setSearchInput] = new useState(null);
    const [selectedTrend, setSelectedTrend] = new useState("mostactive");

    useEffect(() => {
    if (searchInput) {
        const fetchData = async (searchQuery) => {
            let data = await iexApi.searchForSymbol(searchQuery);
            setStockSymbol(data[0].symbol);
        };
        fetchData(searchInput);
    }
    }, [searchInput, setStockSymbol]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userQuery = document.getElementById("stockInput").value;
        setSearchInput(userQuery);
    };

    const handleTrendChange = (e) => {
      setSelectedTrend(e.target.value);
    }


    return (
      <>
        <SearchBar />
        <h1>Welcome Home</h1>
        <Link to="/">Sign In</Link>
        <IndexesEtfs />

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
          <>
            <fieldset className="trend-options">
              <legend>Market trend</legend>
              <input
                type="radio"
                name="trendOption"
                id="most-active"
                value="mostactive"
                className="trendOption"
                checked={selectedTrend === "mostactive"}
                onChange={handleTrendChange}
              />
              <label htmlFor="most-active">Most active</label>

              <input
                type="radio"
                name="trendOption"
                id="gainers"
                value="gainers"
                className="trendOption"
                checked={selectedTrend === "gainers"}
                onChange={handleTrendChange}
              />
              <label htmlFor="gainers">Gainers</label>

              <input
                type="radio"
                name="trendOption"
                id="losers"
                value="losers"
                className="trendOption"
                checked={selectedTrend === "losers"}
                onChange={handleTrendChange}
              />
              <label htmlFor="losers">Losers</label>
            </fieldset>
            <TrendList trendType={selectedTrend} />
          </>
        )}
      </>
    );
}

export default Home;