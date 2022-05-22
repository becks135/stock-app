const StockTile = ({name, price, change, percentChange}) => {
    return(
        <li className="stock-tile">
            <h3>{name}</h3>
            <p>{price}</p>
            {
                change>=0?
                    <p className="positive-change">{`+${change} (+${percentChange}%)`}</p>
                :
                    <p className="negative-change">{`${change} (${percentChange}%)`}</p>
            }
        </li>
    )
}

export default StockTile;