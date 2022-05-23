import { useEffect, useState } from "react";
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
        // TODO: change back to div and put li at parent level
        <li className="stock-tile">
            {stockInfo ? (
            <>
                <p>{stockInfo.companyName}</p>
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
        </li>
    );
}

export default StockTileAPI;