import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

//Components
import LandingPage from "./components/LandingPage/LandingPage";
import Platform from "./components/Platform/Platform";

const App = ()=>{
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/platform" element={<Platform />} exact />
            </Routes>
       </BrowserRouter>
    )
};

export default App;