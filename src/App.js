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
  


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            
              <div>
                <Search  />
                <ReceipList  />
              </div>
           
          }
        />
        <Route path="/:idreceip" element={<ReceipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
