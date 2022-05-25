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
        mostactive: "The stocks or funds with the highest trading volume",
        gainers: "The top gaining stocks or funds (by percent change)",
        losers: "The top losing stocks or funds (by percent change)"
    }

//display first 5 items on page
    return(
        <>
            {/* <h2>{listHeading[trendType]}</h2> */}
            <h2>{listDescription[trendType]}</h2>
            <ul>
                {trendData.map(company => {
                    return(
                        <li key={company.symbol}>
                            <Link to={`/stockdetails/${company.symbol}`}>
                                <p>{company.symbol}</p>
                                <p>{company.companyName}</p>
                                <p>${company.latestPrice.toFixed(2)}</p>
                                <p>{(company.changePercent * 100).toFixed(2)}%</p>
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
        </>
    )
}

export default TrendList;