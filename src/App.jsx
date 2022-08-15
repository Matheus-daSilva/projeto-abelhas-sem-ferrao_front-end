import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Games from "./pages/Games"
import Home from "./pages/Home"
import Login from "./pages/SignIn"

export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    )
}