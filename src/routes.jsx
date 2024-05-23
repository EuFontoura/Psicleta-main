import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Pages/Form";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ < Home /> }></Route>
                <Route path="/formulário" element={ < Form /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;