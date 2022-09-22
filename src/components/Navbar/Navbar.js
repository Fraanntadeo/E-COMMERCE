import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import "../../App.css";
import { Link } from 'react-router-dom'


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Thynuviel Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/1">Fuente</Link>
                        <Link to="/2">Procesador</Link>
                        <Link to="/3">Mouse</Link>
                        <Link to="/4">Gabinete</Link>
                    </Nav>
                    <Link to='/cart'><CartWidget/></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default CollapsibleExample;