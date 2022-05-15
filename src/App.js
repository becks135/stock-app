//styles
import './App.css';

//modules
import { useState, useEffect } from 'react';
import iexApi from './modules/iexApi';

function App() {

  const[test, setTest] = new useState([]);

  useEffect(()=> {  
    const fetchData = async(searchQuery) => {
      let data = await iexApi.symbolSearch(searchQuery);
      setTest(data);
    }
    fetchData("google");
  },[])

console.log(test);


    return (
      <div className="App">
        {/* <p>{test.symbol}</p> */}
        {/* <p>{iexApi.symbol}</p> */}
    
      </div>
    );
}

export default App;
