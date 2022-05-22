import { Link } from "react-router-dom";
import IndexesEtfs from "./IndexesEtfs";
import StockTile from "./StockTile";

function Home(){
    return(
        <>
            <h1>Welcome Home</h1>
            <Link to="/">Sign In</Link>
            <IndexesEtfs />
        </>
    );
}

export default Home;