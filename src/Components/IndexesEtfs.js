//modules
import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import iexApi from "../modules/iexApi";

//components
import StockTileAPI from "./StockTileAPI";


const IndexesEtfs = () => {
    const [indexesEtfData, setIndexesETFData] = useState([]);

    // const listOfEtfs = ["XIU","IVV","DIA","ISF","EWJ"];

    // let etfSummary = {}
    const listOfEtfs = ["SPY", "QQQM", "DIA"];
        
    return (
      <ul className="indexes-etfs">
        {
            listOfEtfs.map((etf, index)=>{
                return(
                    <StockTileAPI key={index} symbol={etf} />
                )
            })
        }
      </ul>
    );
}

export default IndexesEtfs;