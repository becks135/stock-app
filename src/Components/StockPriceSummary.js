const StockPriceSummary = ({name,symbol,price,change, changePercent,date, dateType}) => {

    //if date is in milliseconds, convert to readable format
    if (dateType=="ms"){
        const newDate = new Date(date);
        date=newDate.toString();
    }

    return (
        <div className="stock-summary">
            <p>{`${name} (${symbol})`}</p>
            <p className="stock-price">
            {price}
            {change >= 0 ? (
                <span className="positive-change">{`+${change} (+${(
                changePercent * 100
                ).toFixed(2)}%)`}</span>
            ) : (
                <span className="negative-change">{`${change} (${(
                changePercent * 100
                ).toFixed(2)}%)`}</span>
            )}
            </p>
            <p>{date}</p>
        </div>
    );
}

export default StockPriceSummary;