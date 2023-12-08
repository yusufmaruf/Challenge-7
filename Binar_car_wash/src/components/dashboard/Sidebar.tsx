import { Nav } from "react-bootstrap";


type SidebarProps = {
  routes: Array<any>,
  image: string,
  color: string
}

function Sidebar({ color, routes }: SidebarProps) {
  return (
    <div className="sidebar" data-color={color}>
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            {/* <div className="logo-img">
              <img src={logo} width={100} height={100} alt="..." />
            </div> */}
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Creative Tim
          </a>
        </div>
        <Nav>
           {routes.map((route, index) => (
            <Nav.Link key={index} href={route.path}>
             
               {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
