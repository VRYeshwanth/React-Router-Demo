import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import PostList from "./PostList"
import PostDetail from "./PostDetail"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Settings from "./Settings"
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
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="profile" element={<Profile />}></Route>
                    <Route path="settings" element={<Settings />}></Route>
                </Route>
            </Routes>
        </div>
    )
}