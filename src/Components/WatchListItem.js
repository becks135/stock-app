//components
import StockTileAPI from "./StockTileAPI";

//modules
import { getDatabase, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";

//config
import firebase from "../config/firebase";

const WatchListItem = ({symbol}) => {
    const userId = "guest";
    const database = getDatabase(firebase);


    const removeStockFromList = (stock) => {
        const watchListItemRef = ref(database, `${userId}/watchlist/${stock}`);
        remove(watchListItemRef);
    }


    return(
        <>
            <StockTileAPI symbol={symbol} />
            <button onClick={()=>{
                removeStockFromList(symbol)
            }}>Remove</button>
        </>
    )
}

export default WatchListItem;