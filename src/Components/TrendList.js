//modules
import { useState, useEffect } from "react";
import iexApi from "../modules/iexApi";
import { Link } from "react-router-dom";

const TrendList = ({trendType}) => {
    const [trendData, setTrendData] = useState([]);

//take list type as prop (eg. most active, gainer, loser)
    useEffect(() => {
        const fetchTrendData = async (trend) => {
            let data = await iexApi.getMarketTrend(trend);
            setTrendData(data);
        };
        fetchTrendData(trendType);
    }, [trendType]);

    const listHeading = {
        mostactive: "Most Active",
        gainers: "Biggest Gainers",
        losers: "Biggest Losers"
    }

    const listDescription = {
        mostactive: "Stocks or funds with the highest trading volume",
        gainers: "Top gaining stocks or funds (by percent change)",
        losers: "Top losing stocks or funds (by percent change)"
    }

//display first 5 items on page
    return(
        <div className="trend-list">
            {/* <h2>{listHeading[trendType]}</h2> */}
            <h2>{listDescription[trendType]}</h2>
            <ul>
                {trendData.map(company => {
                    return(
                        <li key={company.symbol} className="trend-list-item">
                            <Link to={`/stockdetails/${company.symbol}`}>
                                <p className="stock-symbol">{company.symbol}</p>
                                <p className="stock-name">{company.companyName}</p>
                                <p className="stock-price">${company.latestPrice.toFixed(2)}</p>
                                {/* <p>{(company.changePercent * 100).toFixed(2)}%</p> */}
                                {company.change >= 0 ? (
                                <p className="stock-change positive-change">{`+$${company.change} (+${(
                                    company.changePercent * 100
                                ).toFixed(2)}%)`}</p>
                                ) : (
                                <p className="stock-change negative-change">{`$${company.change} (${(
                                    company.changePercent * 100
                                ).toFixed(2)}%)`}</p>
                                )}


                            </Link>
                        </li>
                    )
                })}
                {/* <li>
                    <p>MFC</p>
                    <p>Manulife Financial</p>
                    <p>$22.53</p>
                    <p>3.02%</p>
                </li>
                <li>
                    <p>MFC</p>
                    <p>Manulife Financial</p>
                    <p>$22.53</p>
                    <p>3.02%</p>
                </li>
                <li>
                    <p>MFC</p>
                    <p>Manulife Financial</p>
                    <p>$22.53</p>
                    <p>3.02%</p>
                </li> */}
            </ul>
        </div>
    )
}

export default TrendList;