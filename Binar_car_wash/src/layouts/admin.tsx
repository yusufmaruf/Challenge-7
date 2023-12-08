import { Outlet  } from "react-router-dom";

import AdminNavbar from "../components/dashboard/AdminNavBar";
import Footer from "../components/dashboard/Footer";
import Sidebar from "../components/dashboard/Sidebar";

import { useRef, useState } from "react";

function Admin() {
  const sidebarImage = "https://favicon.io/assets/static/index-generate-from-emoji.2f2d982.a63b2d23076ae3098ef8b64b550e2753.png"
  const [image] = useState(sidebarImage);
  const [color] = useState("black");
  const [hasImage] = useState(true);
  const mainPanel = useRef(null);
  const routes = [
    { path: "/dashboard", name: "Dashboard" }, {
      path: "/dashboard/cars",
      name: "Car Management"
    }
  ]
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
            <div className="content">
              <Outlet />
            </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
