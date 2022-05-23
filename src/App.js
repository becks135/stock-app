//styles
import "./styles/sass/App.scss"

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import StockDetails from "./Components/StockDetails";

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/stockdetails/:symbol" element={<StockDetails />} /> */}
        </Routes>
      </div>
    );
}

export default App;
