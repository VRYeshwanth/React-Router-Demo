import { useNavigate } from "react-router-dom"
export default function Login({login, setLogin}) {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            setLogin(!login);
            navigate("/dashboard");
        }}>Login</button>
    )
}