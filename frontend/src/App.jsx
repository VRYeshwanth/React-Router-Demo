import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import PostList from "./PostList"
import PostDetail from "./PostDetail"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Settings from "./Settings"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login"
import { Routes , Route } from "react-router-dom"
import { useState } from "react"

export default function App() {
    const [login, setLogin] = useState(false);
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/posts" element={<PostList />}/>
                <Route path="/posts/:id" element={<PostDetail />}/>
                <Route path="/login" element={<Login login={login} setLogin={setLogin}/>}></Route>
                <Route path="/dashboard" element={<PrivateRoute isLoggedIn={login}><Dashboard /></PrivateRoute>}>
                    <Route path="profile" element={<Profile />}></Route>
                    <Route path="settings" element={<Settings />}></Route>
                </Route>
            </Routes>
        </div>
    )
}