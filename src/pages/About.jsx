// About.jsx
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="jumbotron-about">
                <h1>Somos observadores de aves</h1>
            </div>
            <div className="columns">
                <div className="column">
                    <h2>La Pasión que Impulsa a los Observadores de Aves en Bogotá</h2>
                    <p>En Bogotá, la observación de aves es más que un simple pasatiempo; es una pasión que despierta el
                        interés y la emoción de muchas personas, desde naturalistas experimentados hasta entusiastas
                        novatos. ¿Qué es lo que motiva a los observadores de aves en esta vibrante ciudad? La respuesta
                        se encuentra en una combinación única de factores que hacen de Bogotá un destino privilegiado
                        para la avifauna y sus admiradores.</p>
                </div>
                <div className="column">
                    <h2>La Diversidad de Especies</h2>
                    <p>Uno de los principales motores que impulsa a los observadores de aves en Bogotá es la increíble
                        diversidad de especies que la ciudad y sus alrededores ofrecen. Con más de 200 especies de aves
                        registradas, incluyendo varias endémicas y en peligro de extinción, Bogotá se convierte en un
                        escenario perfecto para la observación. Desde el diminuto colibrí hasta el majestuoso águila,
                        cada especie representa una oportunidad única para aprender y maravillarse con la
                        naturaleza.</p>
                </div>

            </div>
            <div className="column">
                <h2 className="galeria-titulo">Galería de nuestros avistamientos</h2>
                <p className="galeria-titulo">Intenta adivinar los colores ante de pasar el ratón por encima de la
                    imagen</p>

            </div>
            <div className="gallery-about">
                <img src="/assets/img/azulejo.jpg" alt="Azulejo"/>
                <img src="/assets/img/gymnomystax_mexicanus.jpg" alt="gymnomystax mexicanus"/>
                <img src="/assets/img/mirla.jpeg" alt="mirla"/>

                <img src="/assets/img/periquito_de_anteojos.JPG" alt="periquito de anteojos"/>
                <img src="/assets/img/siriri.jpg" alt="siriri"/>
                <img src="/assets/img/buho.jpeg" alt="Buho"/>
                <img src="/assets/img/tangara_palmera.jpg" alt="tangara palmera"/>
                <img src="/assets/img/tingua-azul.jpeg" alt="tingua azul"/>
                <img src="/assets/img/toche_pico_de_plata.webp" alt="toche pico de plata"/>
                <img src="/assets/img/tordo_llenero.jpeg" alt="tordo llanero"/>
                <img src="/assets/img/tingua-bogotana.jpeg" alt="tingua bogotana"/>
                <img src="/assets/img/gorrion.jpg" alt="Gorrion"/>
                <img src="/assets/img/siriri-2.jpg" alt="siriri"/>
                <img src="/assets/img/colibri.jpeg" alt="Colibri"/>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Aves de Bogotá. Todos los derechos reservados.</p>
                <p>By Mauricio Herrera</p>
                <p>Estudiante UNIR</p>

            </footer>
        </div>
    );
};

export default About;