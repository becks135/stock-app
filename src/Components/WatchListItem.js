//modules
import { getDatabase, ref, remove } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iexApi from "../modules/iexApi";

//config
import firebase from "../config/firebase";

const WatchListItem = ({symbol}) => {
    const userId = "guest";
    const database = getDatabase(firebase);
    const [stockInfo, setStockInfo] = useState([]);

    useEffect(() => {
        const fetchQuoteData = async (symbol) => {
            let data = await iexApi.getQuote(symbol);
            setStockInfo(data);
        };
        fetchQuoteData(symbol);
    }, [symbol]);

    const removeStockFromList = (stock) => {
        const watchListItemRef = ref(database, `${userId}/watchlist/${stock}`);
        remove(watchListItemRef);
    }

    return (
        <>
        {/* //todo:add conditional, if stock info or loading.... */}
            <Link to={`/stockdetails/${symbol}`} className="watchlist-item">
                <p className="stock-symbol">({symbol})</p>
                <p className="stock-name">{stockInfo.companyName}</p>
                <p className="stock-price">${stockInfo.latestPrice}</p>
                {stockInfo.change >= 0 ? (
                <p className="stock-change positive-change">{`+${stockInfo.change} (+${(
                    stockInfo.changePercent * 100
                ).toFixed(2)}%)`}</p>
                ) : (
                <p className="stock-change negative-change">{`${stockInfo.change} (${(
                    stockInfo.changePercent * 100
                ).toFixed(2)}%)`}</p>
                )}
            </Link>
            <button onClick={() => {removeStockFromList(symbol)}}>
                <FontAwesomeIcon icon={faCircleXmark} className="close-icon" />
            </button>
        </>
    );
}

export default WatchListItem;