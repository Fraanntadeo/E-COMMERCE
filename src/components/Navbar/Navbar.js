import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import "../../App.css";

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Thynuviel Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/1">Fuente</Nav.Link>
                        <Nav.Link href="/2">Procesador</Nav.Link>
                        <Nav.Link href="/3">Mouse</Nav.Link>
                        <Nav.Link href="/4">Gabinete</Nav.Link>
                    </Nav>
                    <Nav.Link href="/cart"><CartWidget /></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default CollapsibleExample;