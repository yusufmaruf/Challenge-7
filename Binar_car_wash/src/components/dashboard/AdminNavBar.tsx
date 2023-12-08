import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { FaBell, FaPalette } from 'react-icons/fa';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            Binar Car Wash
          </Navbar.Brand>
        </div>
          <div className="d-flex align-items-center">
          {/* User Profile Picture */}
          <img
            src="path/to/user-profile-picture.jpg"
            // alt="User Profile"
            className="rounded-circle"
            width="24"
            height="24"
            style={{ marginRight: '8px' }}
          />

          {/* User Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              YourUsername
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
