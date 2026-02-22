import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllUsers } from "../../service/userApi";
import toast from "react-hot-toast";
import "./Dashboard.css";
import { useCallback } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    series: [{ name: "Users Joined", data: [] }],
    options: {
      chart: { type: "bar", height: 350 },
      plotOptions: {
        bar: { horizontal: false, columnWidth: "55%", borderRadius: 5 },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: { categories: [] },
      yaxis: { title: { text: "Users" } },
      fill: { opacity: 1 },
      colors: ["#1d3557"],
    },
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const processChartData = useCallback(() => {
    const counts = [];
    const categories = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

      const count = users.filter((u) => {
        if (!u.createdAt) return false;
        return new Date(u.createdAt).toDateString() === date.toDateString();
      }).length;

      counts.push(count);
      categories.push(dayName);
    }

    setChartData((prev) => ({
      ...prev,
      series: [{ name: "Users Joined", data: counts }],
      options: { ...prev.options, xaxis: { categories: categories } },
    }));
  }, [users]);

  useEffect(() => {
    if (users.length > 0 || !loading) {
      processChartData();
    }
  }, [users, loading, processChartData]);


  if (loading)
    return <div className="dashboard-loading">Loading Dashboard...</div>;

  return (
    <div className="dashboard-page">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-section">
        <h3>User Growth (Last 7 Days)</h3>
        <div className="chart-container">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </div>
      </div>

      <div className="dashboard-section">
        <h3>All Users</h3>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
