import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

//Components
import LandingPage from "./components/LandingPage/LandingPage";

const App = ()=>{
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                  
            </Routes>
       </BrowserRouter>
    )
};

export default App;