//modules
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import iexApi from "../modules/iexApi";

//components
import StockPriceSummary from "./StockPriceSummary";
import HistoricalChart from "./HistoricalChart";
import StockStats from "./StockStats";
import NewsAPI from "./News/NewsAPI";

const StockDetails = ({symbol}) => {

    // const {symbol} = useParams();
    const [stockInfo, setStockInfo] = useState([]);

    //on load, get quote data from quote endpoint and pass to stockInfo state variable
    useEffect(() => {
        const fetchQuoteData = async (symbol) => {
            let data = await iexApi.getQuote(symbol);
            setStockInfo(data);
        };
        fetchQuoteData(symbol);
    }, [symbol]);

    console.log({stockInfo});

    return(
        <>
            {stockInfo?(
                <>
                    <StockPriceSummary 
                        name={stockInfo.companyName}
                        symbol={symbol}
                        price={stockInfo.latestPrice}
                        change={stockInfo.change}
                        changePercent={stockInfo.changePercent}
                        date={stockInfo.latestUpdate}
                        dateType="ms"
                    />

                    <HistoricalChart symbol={symbol}/>

                    <StockStats
                        previousClose={stockInfo.previousClose}
                        yearHigh={stockInfo.week52High}
                        yearLow={stockInfo.week52Low}
                        marketCap={stockInfo.marketCap}
                        volume={stockInfo.volume}
                        peRatio={stockInfo.peRatio}
                        primaryExchange={stockInfo.primaryExchange}
                        currency={stockInfo.currency} />

                    <NewsAPI symbol={symbol}/>

                </>)
            :
                <p>Loading...</p>
            }
        </>
        
    )

}

export default StockDetails;