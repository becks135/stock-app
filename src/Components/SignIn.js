import { Link } from "react-router-dom";

function SignIn(){
    return(
        <>
            <h1>Search the stock market for your next investment.</h1>
            {/* <button>Sign In</button> */}
            <Link to="/home">Continue as guest</Link>
        </>
    )
}

export default SignIn;