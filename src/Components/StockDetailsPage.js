import { useParams } from "react-router-dom"
import StockDetails from "./StockDetails";

const StockDetailsPage = () => {
    const {symbol} = useParams();

    return <StockDetails symbol={symbol} />;
};

export default StockDetailsPage;
