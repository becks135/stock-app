//modules
import { useState, useEffect } from "react";
import iexApi from "../modules/iexApi";

//components
import StockPriceSummary from "./StockPriceSummary";
import HistoricalChart from "./HistoricalChart";

const StockDetails = ({symbol}) => {

    

    const [stockInfo, setStockInfo] = useState([]);

    //on load, get quote data from quote endpoint and pass to stockInfo state variable
    useEffect(() => {
        const fetchQuoteData = async (symbol) => {
            let data = await iexApi.getQuote(symbol);
            setStockInfo(data);
        };
        fetchQuoteData(symbol);
    }, []);

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
                    <HistoricalChart symbol="AAPL"/>
                </>)
            :
                <p>Loading...</p>
            }
        </>
        
    )

}

export default StockDetails;