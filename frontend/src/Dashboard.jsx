import { Link , Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Link to="profile">Profile</Link>
            <Link to="settings">Settings</Link>
            <Outlet />
        </div>
    )
}