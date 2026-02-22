import Layout from "./common/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Districts from "./Pages/Districts";
import Gallery from "./Pages/Gallery/Gallery";
import Contactus from "./Pages/Contactus.jsx";
import Signup from "./Pages/Signup.jsx";
// Import generic DistrictDetail instead of individual files
import DistrictDetail from "./Pages/District/DistrictDetail.jsx";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import Developertab from "./Pages/Developertab.jsx";
import Adventure_Trails from "./Pages/Adventure_Trails.jsx";
import Temples from "./Pages/Temples.jsx";
import AddDistrict from "./Pages/Admin/AddDistrict.jsx";
import AdminMessages from "./Pages/Admin/AdminMessages.jsx";
import AddGallery from "./Pages/Admin/AddGallery.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/District", element: <Districts /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/About", element: <About /> },
      { path: "/Contactus", element: <Contactus /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Login", element: <Login /> },
      // Dynamic Route for District Details
      { path: "/District/:name", element: <DistrictDetail /> },
      // Admin Route
      { path: "/admin/add-district", element: <AddDistrict /> },
      { path: "/admin/messages", element: <AdminMessages /> },
      { path: "/admin/add-gallery", element: <AddGallery /> },
      { path: "/admin/dashboard", element: <Dashboard /> },
      { path: "/Developer", element: <Developertab /> },
      { path: "/adventure", element: <Adventure_Trails /> },
      { path: "/Temples", element: <Temples /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
