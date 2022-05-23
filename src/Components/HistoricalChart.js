//modules
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import iexApi from "../modules/iexApi";

const HistoricalChart = ({symbol}) => {
    const [prices, setPrices] = useState(null);
    const [dates, setDates] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);
    const [chartRange, setChartRange] = useState("1w");

    

    useEffect(() => {
        const fetchHistoricalData = async (symbol,range) => {
            let historicalInfo = await iexApi.getHistoricalPrices(symbol,range);
            
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
            fetchHistoricalData(symbol, chartRange);
        }
    },[symbol, chartRange]);


    useEffect(()=>{
        const createDataTable = () => {
            let jointArray = [["date", "price"]];
            for (let i = 0; i < prices.length; i++) {
                jointArray.push([dates[i], prices[i]]);
            }
            console.log(jointArray)
            setHistoricalData(jointArray);
        };

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

    const handleRangeChange = (e) => {
        e.preventDefault();
        setChartRange(e.target.value);
    }

    return (
      <>
        <h2>Historical Chart</h2>

        <fieldset className="chartLabels">
          <legend>Date range for historical chart</legend>
          <input
            type="radio"
            name="dateRange"
            id="1w"
            value="1w"
            className="dateRange"
            checked={chartRange === "1w"}
            onChange={handleRangeChange}
          />
          <label htmlFor="1w">1w</label>

          <input
            type="radio"
            name="dateRange"
            id="1m"
            value="1m"
            className="dateRange"
            checked={chartRange === "1m"}
            onChange={handleRangeChange}
          />
          <label htmlFor="1m">1m</label>

          <input
            type="radio"
            name="dateRange"
            id="3m"
            value="3m"
            className="dateRange"
            checked={chartRange === "3m"}
            onChange={handleRangeChange}
          />
          <label htmlFor="3m">3m</label>

          <input
            type="radio"
            name="dateRange"
            id="1y"
            value="1y"
            className="dateRange"
            checked={chartRange === "1y"}
            onChange={handleRangeChange}
          />
          <label htmlFor="1y">1y</label>

          <input
            type="radio"
            name="dateRange"
            id="5y"
            value="5y"
            className="dateRange"
            checked={chartRange === "5y"}
            onChange={handleRangeChange}
          />
          <label htmlFor="5y">5y</label>

          <input
            type="radio"
            name="dateRange"
            id="10y"
            value="10y"
            className="dateRange"
            checked={chartRange === "10y"}
            onChange={handleRangeChange}
          />
          <label htmlFor="10y">10Y</label>
        </fieldset>

        <Chart
          chartType="AreaChart"
          height="400px"
          data={historicalData}
          options={options}
        />
      </>
    );
}

export default HistoricalChart;