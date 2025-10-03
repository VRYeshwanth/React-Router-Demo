import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import PostList from "./PostList"
import PostDetail from "./PostDetail"
import { Routes , Route } from "react-router-dom"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/posts" element={<PostList />}/>
                <Route path="/posts/:id" element={<PostDetail />}/>
            </Routes>
        </div>
    )
}