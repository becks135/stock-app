import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iexApi from "../modules/iexApi";

const StockTileAPI = ({symbol}) => {

    const [stockInfo, setStockInfo] = useState([]);

    useEffect(()=>{
        const fetchQuoteData = async (symbol) => {
            let data = await iexApi.getQuote(symbol);
            setStockInfo(data);
        };
        fetchQuoteData(symbol);
    },[])

    return (
        <>
        {stockInfo ? (
            <>
                <Link to={`/stockdetails/${symbol}`}>
                {stockInfo.companyName} ({symbol})
                </Link>
            
                <p className="stock-tile-price">
                {stockInfo.latestPrice}
                {stockInfo.change >= 0 ? (
                    <span className="positive-change">{`+${stockInfo.change} (+${(
                    stockInfo.changePercent * 100
                    ).toFixed(2)}%)`}</span>
                ) : (
                    <span className="negative-change">{`${stockInfo.change} (${(
                    stockInfo.changePercent * 100
                    ).toFixed(2)}%)`}</span>
                )}
                </p>
            </>
        ) : null}
        </>
    );
}

export default StockTileAPI;