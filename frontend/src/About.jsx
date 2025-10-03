import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <div className="about-page">
            <h1>About Page</h1>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
    )
}