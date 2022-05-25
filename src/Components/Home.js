//modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iexApi from "../modules/iexApi";
import { useNavigate } from "react-router-dom";

//components
import IndexesEtfs from "./IndexesEtfs";
import SearchBar from "./Searchbar";
import StockDetails from "./StockDetails";
import TrendList from "./TrendList";


function Home(){
   
    // const [display, setDisplay] = new useState(false);
    // const [stockSymbol, setStockSymbol] = new useState("");
    // const [searchInput, setSearchInput] = new useState(null);
    const [selectedTrend, setSelectedTrend] = new useState("mostactive");
    const navigate = useNavigate();  //todo: change to const?

    // useEffect(() => {
    // if (searchInput) {
    //     const fetchData = async (searchQuery) => {
    //         let data = await iexApi.searchForSymbol(searchQuery);
    //         setStockSymbol(data[0].symbol);
    //     };
    //     fetchData(searchInput);
    // }
    // }, [searchInput, setStockSymbol]);


    //Todo : move this functionality into the search bar
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userQuery = document.getElementById("stockInput").value;
        //todo - if empty, display error and do nothing
        if (userQuery) {
          let searchSymbol;
          const fetchData = async (searchQuery) => {
            let data = await iexApi.searchForSymbol(searchQuery);
            let path = `/stockdetails/${data[0].symbol}`;
            navigate(path);
          };
          fetchData(userQuery);
        }
    };

    const handleTrendChange = (e) => {
      setSelectedTrend(e.target.value);
    }


    return (
      <>
        {/* <Link to="/">Sign In</Link> */}
        <h1>Search the stock market for your next investment.</h1>
        
        {/* <IndexesEtfs /> */}
        <div className="home-search-bar">
          <SearchBar
            placeholderText="Enter company name or stock symbol"
            inputId="stockInput"
            handleSubmit={handleFormSubmit}
          />
        </div>
        <div className="trend-list-container">
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
        </div>
      </>
    );
}

export default Home;