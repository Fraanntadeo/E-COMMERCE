import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import "../../App.css";
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='nav'>
            <Link to="/" className="nav-title">Thynuviel Games</Link>
            <Link to="/1" className="nav-option">Fuente</Link>
            <Link to="/2" className="nav-option">Procesador</Link>
            <Link to="/3" className="nav-option">Mouse</Link>
            <Link to="/4" className="nav-option">Gabinete</Link>
            <Link to="/cart" className="nav-widget"><CartWidget /></Link>
        </div>
    );
}

export default Navbar;