//modules
import { useEffect, useState } from "react";
import iexApi from "../modules/iexApi";

//components
import StockTile from "./StockTile";


const IndexesEtfs = () => {
    const [indexesEtfData, setIndexesETFData] = useState([]);

    // const listOfEtfs = ["XIU","IVV","DIA","ISF","EWJ"];
    const listOfEtfs = ["AAPL", "FB", "NFLX"];
    // let etfSummary = {}


    useEffect(() => {
        const fetchQuoteData = async (symbol) => {
            let data = await iexApi.getQuote(symbol);
            return (data);
        };

        let etfData = [];

        listOfEtfs.forEach((etf) => {
            fetchQuoteData(etf)
            .then(data=>{
                const etfSummary = {
                    name: data.companyName,
                    price: data.latestPrice,
                    change: data.change.toFixed(2),
                    changePercent: (data.changePercent * 100).toFixed(2),
                };
                return etfSummary;
                // etfData.push(etfSummary);
            })
            .then(summary=>{
                etfData.push(summary)
                return etfData;
            })
            .then(data=>{
                setIndexesETFData(data);
            })
            .catch(err=>console.log(err));
        });
    },[]);

    
    return (
        <ul className="indexes-etfs">
            {
                indexesEtfData.map((etf)=>{
                    return (
                            <StockTile key={`index-etf-${etf.name}`}
                                name={etf.name}
                                price={etf.price}
                                change={etf.change}
                                percentChange={etf.changePercent}
                            />
                        
                    );
                })
            }
            
            {/* <StockTile name="Apple" price={230.5} change={23} percentChange={10} />
            <StockTile name="Apple" price={230.5} change={23} percentChange={10} />
            <StockTile name="Apple" price={230.5} change={23} percentChange={10} />
            <StockTile name="Apple" price={230.5} change={23} percentChange={10} /> */}
        </ul>
    );
}

export default IndexesEtfs;