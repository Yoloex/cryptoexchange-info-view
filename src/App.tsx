import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main } from "./components/Main";
import { Detail } from "./components/Detail";
import { CryptoContext } from "./utils/store";
import { Info } from "./types"

function App() {

  const [details, setDetails] = useState<Info[]>([])

  return (
      <CryptoContext.Provider value={{ details, setDetails}}>
          <BrowserRouter>
              <Routes>
                  <Route path="/tableDetail" element={<Detail/>}></Route>
                  <Route path="/" element={<Main/>}></Route>
              </Routes>
          </BrowserRouter>
      </CryptoContext.Provider>
  );
}

export default App;
