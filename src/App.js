import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReceipDetails from "./Components/ReceipDetails";
import { ReceipList } from "./Components/ReceipList";
import Search from "./Components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function App() {
  const [Rlist, setRlist] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchedValue, setSearchedValue] = useState('chiken')
  const handelSearch = (value) => { 
    setSearchedValue(value)
   }
  useEffect(() => {
    const getReceipes = async () => {
      try {
        const { data } = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${searchedValue}&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5`
        );

        // console.log(data)
        setRlist(data.hits);
        setloading(false);
      } catch (error) {}
    };
    getReceipes();
  }, [searchedValue]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <div>
                ..........loading <br />
              <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div>
                <Search handelSearch={handelSearch} />
                <ReceipList Rlist={Rlist} />
              </div>
            )
          }
        />
        <Route path="/:idreceip" element={<ReceipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
