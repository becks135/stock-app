//modules
import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import iexApi from "../modules/iexApi";

//components
import StockTile from "./StockTile";


const IndexesEtfs = () => {
    const [indexesEtfData, setIndexesETFData] = useState([]);

    // const listOfEtfs = ["XIU","IVV","DIA","ISF","EWJ"];

    // let etfSummary = {}
    const listOfEtfs = ["AAPL", "FB", "NFLX"];
    
    useEffect(() => {
       
        let etfData = [];
        const fetchQuoteData = async (symbol) => {
            let data = await iexApi.getQuote(symbol);
            etfData.push(data);
            setIndexesETFData(etfData);
        };

        for (let i = 0; i < listOfEtfs.length; i++) {
            fetchQuoteData(listOfEtfs[i]);
        }
    }, []);

    console.log(indexesEtfData)
    
    return (
      <ul className="indexes-etfs">
        {
                indexesEtfData.map((etf,index)=>{
                    return (
                        <li key={index}>{etf.companyName}</li>
                            // <StockTile key={`index-etf-${etf.name}`}
                            //     name={etf.name}
                            //     price={etf.price}
                            //     change={etf.change}
                            //     percentChange={etf.changePercent}
                            // />
                        
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