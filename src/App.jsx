import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Games from "./pages/Games"
import Home from "./pages/Home"
import Login from "./pages/SignIn"
import Register from "./pages/SignUp"
import Forum from "./pages/Forum"


export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    )
}