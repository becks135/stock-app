const StockTile = ({name, price, change, percentChange}) => {
    return(
        <div className="stock-tile">
            <h3>{name}</h3>
            <p>{price}</p>
            {
                change>=0?
                    <p className="positive-change">{`+${change} (+${percentChange}%)`}</p>
                :
                    <p className="negative-change">{`${change} (${percentChange}%)`}</p>
            }
        </div>
    )
}

export default StockTile;