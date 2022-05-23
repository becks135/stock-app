const StockStats = ({ dayHigh, dayLow, yearHigh, yearLow, marketCap, volume, peRatio, primaryExchange, aboutCompany }) => {

    return (
        <>
            <p>
                <span class="label">Day range:</span> ${dayLow} - ${dayHigh}
            </p>
            <p>
                <span class="label">Year range:</span> ${yearLow} - ${yearHigh}
            </p>
            <p><span class="label">Market cap:</span>{marketCap}</p>
            <p><span className="label">Volume:</span>{volume}</p>
            <p><span className="label">P/E Ratio:</span>{peRatio}</p>
            <p><span className="label">Primary Exchange</span>{primaryExchange}</p>
            <p><span className="label">About</span>{aboutCompany}</p>
        </>
    );

}

export default StockStats;