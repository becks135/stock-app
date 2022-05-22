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
        const etfSummary = {
          name: data.companyName,
          price: data.latestPrice,
          change: data.change.toFixed(2),
          changePercent: (data.changePercent * 100).toFixed(2),
        };

        let etfDataCopy = [...indexesEtfData];
        etfDataCopy.push(etfSummary);
        setIndexesETFData(etfDataCopy);
      };

      listOfEtfs.forEach((etf) => {
        fetchQuoteData(etf);
      });
    }, []);

    
    // console.log(quoteData);

    return (
        <div className="indexes-etfs">
            {
                indexesEtfData.map((etf)=>{
                    return (
                      <StockTile
                        key={`index-etf-${etf.name}`}
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
        </div>
    );
}

export default IndexesEtfs;