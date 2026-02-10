import Layout from "./common/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Districts from "./Pages/Districts";
import Gallery from "./Pages/Gallery/Gallery";
import Contactus from "./Pages/Contactus.jsx";
import Signup from "./Pages/Signup.jsx";
import Chamba from "./Pages/District/Chamba/Chamba.jsx";
import Bilaspur from "./Pages/District/Bilaspur/Bilaspur.jsx";
import Mandi from "./Pages/District/Mandi/Mandi.jsx";
import Hamirpur from "./Pages/District/Hamirpur/Hamirpur.jsx";
import Kangra from "./Pages/District/Kangra/Kangra.jsx";
import Kinnaur from "./Pages/District/Kinnaur/Kinnaur.jsx";
import Kullu from "./Pages/District/Kullu/Kullu.jsx";
import Sirmour from "./Pages/District/Sirmour/Sirmour.jsx";
import Shimla from "./Pages/District/Shimla/Shimla.jsx";
import Solan from "./Pages/District/Solan/Solan.jsx";
import Una from "./Pages/District/Una/Una.jsx";
import LahulSpiti from "./Pages/District/LahulSpiti/LahulSpiti.jsx";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import Developertab from "./Pages/Developertab.jsx";
import Adventure_Trails from "./Pages/Adventure_Trails.jsx";
import Temples from "./Pages/Temples.jsx";

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
      { path: "/District/Chamba", element: <Chamba /> },
      { path: "/District/Bilaspur", element: <Bilaspur /> },
      { path: "/District/Mandi", element: <Mandi /> },
      { path: "/District/Hamirpur", element: <Hamirpur /> },
      { path: "/District/Kangra", element: <Kangra /> },
      { path: "/District/Kinnaur", element: <Kinnaur /> },
      { path: "/District/Kullu", element: <Kullu /> },
      { path: "/District/Sirmour", element: <Sirmour /> },
      { path: "/District/Shimla", element: <Shimla /> },
      { path: "/District/Solan", element: <Solan /> },
      { path: "/District/Una", element: <Una /> },
      { path: "/District/LahulSpiti", element: <LahulSpiti /> },
      { path: "/Develper", element: <Developertab /> },
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
