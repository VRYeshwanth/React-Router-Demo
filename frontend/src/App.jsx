import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import { Routes , Route } from "react-router-dom"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}