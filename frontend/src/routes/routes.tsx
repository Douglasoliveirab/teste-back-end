import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
// import { Home } from "../core/pages/home/Home";
// import { Corfirmacao } from "../core/pages/comfirmacao/Comfirmacao";
// import { Parabens } from ".p";



export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}