import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Repositories } from "./pages/repositories"

export function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repositories/users/:userName/repos" element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    )
}