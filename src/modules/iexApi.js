//modules
import axios from "axios";

//namespace contains functions to get data from IEX API
const iexApi = {};

//IEX sandbox is used for testing and displays fake pricing information. Set useSandbox to true to use test data and 
iexApi.useSandbox = true;
if (iexApi.useSandbox) {
    iexApi.urlBase = "https://sandbox.iexapis.com/stable";
    iexApi.token = process.env.REACT_APP_IEX_TOKEN_SANDBOX;
} else {
    iexApi.urlBase = "https://cloud.iexapis.com/stable";
    iexApi.token = process.env.REACT_APP_IEX_TOKEN_REAL;
}


// iexApi.getQuote = (symbol) => {
//     axios({
//         url: `${iexApi.urlBase}/stock/${symbol}/quote`,
//         method: "GET",
//         dataResponse: "json",
//         params: {
//             token: iexApi.token,
//         },
//     }).then((response) => {
//         // console.log(response.data);
//     }).catch((err) => console.log(err));
// };

iexApi.getQuote = async (symbol) => {
    try{
        const {data:response} = await axios({
            url: `${iexApi.urlBase}/stock/${symbol}/quote`,
            method: "GET",
            dataResponse: "json",
            params: {
                token: iexApi.token,
            },
        });
        return response;
    } catch(error) {
        console.log(error);
    }
};

//search for stock symbol (ticker) from user input
iexApi.searchForSymbol = async (searchInput) => {
    try{
        const {data:response} = await axios({
            url:`${iexApi.urlBase}/search/${searchInput}`,
            method:"GET",
            dataResponse:"json",
            params: {
                token:iexApi.token,
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

//returns historical prices for stock
// takes two parameters
// symbol : ticker/symbol of stock
// timePeriod: range for data returned
iexApi.getHistoricalPrices = async (symbol, range) => {
    try{
        const { data:response } = await axios({
            url: `${iexApi.urlBase}/time-series/HISTORICAL_PRICES/${symbol}`,
            method:"GET",
            dataResponse:"json",
            params:{
                token:iexApi.token,
                range:range,
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

iexApi.getMarketTrend = async (trend) => {
    //trend types: mostactive, gainers, losers
    try {
        const { data: response } = await axios({
            url: `${iexApi.urlBase}/stock/market/list/${trend}`,
            method: "GET",
            dataResponse: "json",
            params: {
                token: iexApi.token,
                listLimit: 5,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export default iexApi;
