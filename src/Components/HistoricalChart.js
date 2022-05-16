//modules
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import iexApi from "../modules/iexApi";

const HistoricalChart = ({symbol}) => {
    const [prices, setPrices] = useState(null);
    const [dates, setDates] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);

    

    useEffect(() => {
        // !note, range will not be passed in as prop. will get this from radio button on page
        const fetchHistoricalData = async (symbol,range) => {
            let historicalInfo = await iexApi.getHistoricalPrices(symbol,range);

            console.log({symbol, range})
            let closingPrices = [];
            let dates = [];

            historicalInfo.forEach((quote) => {
                closingPrices.push(quote.close);
                dates.push(new Date(quote.date));
            });

            setPrices(closingPrices);
            setDates(dates);
        };
        if(symbol) {
            console.log({symbol})
            fetchHistoricalData(symbol, "1w");
        }
    },[symbol]);

    const createDataTable = () => {
        let jointArray=[["date","price"]];
        for (let i = 0; i < prices.length; i++) {
            jointArray.push([dates[i],prices[i]]);
        }
        setHistoricalData(jointArray);
    }

    useEffect(()=>{
        if(prices && dates){
            createDataTable();
        }
    },[prices,dates])

    const options = {
        legend: { position: "none" },
        series: {
            0: { color: "#B8A9C9" },
        },
        hAxis: {
            format: "MMM dd, yyyy",
            gridlines: { color: "white" },
        },
        chartArea: {
            left: 50,
            width: "87.5%",
        },
        width: "100%",
    };

    return(
        <>
            <h2>Historical Chart</h2>
            <Chart
                chartType="AreaChart"
                height = "400px"
                data = {historicalData}
                options = {options}
            />
        </>
    )
}

export default HistoricalChart;