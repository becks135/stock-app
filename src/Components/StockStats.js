import { convertNumber } from "../modules/calculations";

const StockStats = ({ previousClose, yearHigh, yearLow, marketCap, volume, peRatio, primaryExchange, currency, aboutCompany }) => {
    return (
        <div className="stock-stats">
            <h3>Summary</h3>
            <p>
                <span className="label">Previous Close: </span>${previousClose}
            </p>
            <p>
                <span className="label">Year range:</span> ${yearLow} - ${yearHigh}
            </p>
            <p><span className="label">Market cap: </span>{convertNumber(marketCap)} {currency}</p>
            <p><span className="label">Volume: </span>{convertNumber(volume)}</p>
            <p><span className="label">P/E Ratio: </span>{peRatio}</p>
            <p><span className="label">Primary Exchange: </span>{primaryExchange}</p>
            {/* <p><span className="label">About</span>{aboutCompany}</p> */}
        </div>
    );
}

export default StockStats;