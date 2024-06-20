import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';
import './App.css';

const App = () => {
    return (
        <div>
            <Link to={"/"} className="top-banner">
                <img src="/aves/assets/img/colibri_logo.png" alt="Logo" />
                <h3>Aves de Bogotá</h3>
            </Link>

            <nav>
                <ul>
                    <li><Link to="/aves/">Inicio</Link></li>
                    <li><Link to="/aves/about">Acerca de nosotros</Link></li>
                    <li><Link to="/aves/contact">Contacto</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/aves/" element={<Home />} />
                <Route path="/aves/about" element={<About />} />
                <Route path="/aves/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;