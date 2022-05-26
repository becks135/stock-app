const StockPriceSummary = ({name,symbol,price,change, changePercent,date, dateType}) => {

    //if date is in milliseconds, convert to readable format
    if (dateType=="ms"){
        const newDate = new Date(date);
        date=newDate.toString();
    }

    return (
        <div className="stock-summary">
            <h2>{`${name} (${symbol})`}</h2>
            <p className="stock-price">
                <span className="price">${price}</span>
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
            <p className="date">{date}</p>
        </div>
    );
}

export default StockPriceSummary;