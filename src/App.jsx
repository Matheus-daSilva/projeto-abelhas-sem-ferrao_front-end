import { BrowserRouter, Routes, Route } from "react-router-dom"
import Games from "./pages/Games"
import Home from "./pages/Home"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    )
}