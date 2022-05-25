//modules
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//config
import firebase from "../config/firebase";

//components
import WatchListItem from "./WatchListItem";

const WatchList = () => {
    const [watchListItems, setWatchListItems] = useState([]);
    const userId = "guest";

    const getWatchListItems = () => {
        const database = getDatabase(firebase);
        const watchListRef = ref(database, `${userId}/watchlist`);

        onValue(watchListRef,(response)=>{
            const watchList = response.val();
            const tempList = []; //watchlist items will be pushed to this array, before this array is added to state.

            for (let key in watchList) {
                tempList.push(key);
            }
            setWatchListItems(tempList);
        })
    }

    //get watchlist items from firebase when component loads
    useEffect(()=>{
        getWatchListItems();
    },[])

    return (
        <div className="watch-list">
            <div>
                <h2>Watchlist</h2>
                <button>
                    <FontAwesomeIcon icon={faXmark} className="close-icon" />
                </button>
            </div>
            <ul>
            {
                //if no items in watchlist, display message indicating empty watchlist
                watchListItems.length === 0 ? 
                (<li>No securities in watch list</li>) : 
                (watchListItems.map((stock) => {
                    return (
                      <li key={stock} className="watchlist-item-container">
                        {/* <p>{stock}</p> */}
                        <WatchListItem symbol={stock} />
                      </li>
                    );})
                )
            }
            </ul>
        </div>
    );


}

export default WatchList;