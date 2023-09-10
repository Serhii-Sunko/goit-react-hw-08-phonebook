import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className=" justify-content-center">
        <Nav>
          <Nav.Item>
            <Nav.Link target="_blank" href="https://github.com/Serhii-Sunko">
              <BsGithub size={30} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              target="_blank"
              href="https://www.linkedin.com/in/serhii-sunko-5527a6144/"
            >
              <BsLinkedin size={30} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
