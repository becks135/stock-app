//modules
import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import iexApi from "../modules/iexApi";

//components
import StockTile from "./StockTile";


const IndexesEtfs = () => {
    const [indexesEtfData, setIndexesETFData] = useState([]);

    // const listOfEtfs = ["XIU","IVV","DIA","ISF","EWJ"];
    const listOfEtfs = ["AAPL", "FB", "NFLX"];
    // let etfSummary = {}

    const fetchQuoteData = async (symbol) => {
        let data = await iexApi.getQuote(symbol);
        return data;
    };
 
    


    return (
        <ul className="indexes-etfs">
            {
                listOfEtfs.map(etf => {
                    fetchQuoteData(etf)
                    .then(data=>{
                        const etf = {
                            name: data.companyName,
                            price: data.latestPrice,
                            change: data.change.toFixed(2),
                            changePercent: (data.changePercent * 100).toFixed(2),
                        };
                        render (
                                <StockTile 
                                    key={`index-etf-${etf.name}`}
                                    name={etf.name}
                                    price={etf.price}
                                    change={etf.change}
                                    percentChange={etf.changePercent}
                                />
                            
                        );
                    })
                })
            }
        
        </ul>
    );
}

export default IndexesEtfs;