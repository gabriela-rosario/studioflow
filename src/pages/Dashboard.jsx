import StatCard from "../components/StatCard";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome back, Gabriela!</h2>
            <div>
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>
            <div>
                Upcoming Appointments
            </div>
            <div>
                Inventory Alerts
            </div>
        </div>
    );
}

export default Dashboard;