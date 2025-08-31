import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Catalogo } from "./components/Catalogo";


export function AppRoutes(){
    return (
<BrowserRouter>
    <Routes>
        <Route path="/Cart" element ={ <Cart/>}>
        </Route>
        <Route path="/Catalogo" element ={ <Catalogo/>}>
        </Route>
    </Routes>
</BrowserRouter>
    )
}
