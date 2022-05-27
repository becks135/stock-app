//styles
import "./styles/sass/App.scss"

//modules
import { Route, Routes } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database"

//config
import firebase from "./config/firebase";

//components
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import StockDetailsPage from "./Components/StockDetailsPage";
import WatchList from "./Components/WatchList";
import Nav from "./Components/Nav";



function App() {

  // const userId = "guest";
  // const database = getDatabase(firebase);
  // const watchListRef = ref(database,`${userId}/watchlist`);

  // onValue(watchListRef, (response)=>{
  //   console.log(response.val());
  // });



    return (
      <div className="App">
        <Nav />
        <div className="wrapper">
          <WatchList />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stockdetails/:symbol" element={<StockDetailsPage />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
