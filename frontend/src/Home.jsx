import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <button onClick={() => navigate("/posts")}>Go to Posts</button>
        </div>
    )
}