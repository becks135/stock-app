import { Link } from "react-router-dom";

//components
import IndexesEtfs from "./IndexesEtfs";
import StockDetails from "./StockDetails";


function Home(){
    return(
        <>
            <h1>Welcome Home</h1>
            <Link to="/">Sign In</Link>
            {/* <IndexesEtfs /> */}
            <StockDetails symbol="AAPL" />
        </>
    );
}

export default Home;