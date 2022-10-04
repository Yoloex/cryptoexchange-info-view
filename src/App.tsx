import React, { useState } from "react";
import { Main } from "./components/Main";
import { Detail } from "./components/Detail";
import { CryptoContext } from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Info } from "./types"

function App() {

  const [details, setDetails] = useState<Info[]>([])

  return (
        <div className="App">
          <CryptoContext.Provider value={{ details, setDetails}}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/tableDetail" element={<Detail/>}></Route>
                      <Route path="/" element={<Main/>}></Route>
                  </Routes>
              </BrowserRouter>
          </CryptoContext.Provider>
        </div>
  );
}

export default App;
