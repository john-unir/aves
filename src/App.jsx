import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';
import './App.css';

const App = () => {
    return (
        <div>
            <Link to={"/"} className="top-banner">
                <img src="/aves/assets/img/colibri_logo.png" alt="Logo"/>
                <h3>Aves de Bogotá</h3>
            </Link>

            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de nosotros</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        </div>
    );
};

export default App;