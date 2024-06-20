import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Bienvenido a Aves de Bogotá</h1>
            </div>
            <div className="columns">
                <div className="column">
                    <h2>Las Aves de Bogotá</h2>
                    <p>Bogotá, la capital de Colombia, es un paraíso para los amantes de las aves. La ciudad y sus
                        alrededores albergan una gran diversidad de especies, desde coloridos colibríes hasta
                        majestuosas águilas. Gracias a su ubicación geográfica y su variedad de ecosistemas, como
                        humedales, bosques y páramos, Bogotá se convierte en un punto clave para la observación de aves.
                        En total, se pueden encontrar más de 200 especies de aves en la región, incluyendo varias
                        endémicas y en peligro de extinción, lo que hace de Bogotá un destino imprescindible para los
                        ornitólogos y naturalistas.</p>
                </div>
                <div className="column">
                    <h2>La Migración de Aves a Bogotá</h2>
                    <p>Cada año, Bogotá se convierte en un refugio temporal para numerosas especies de aves migratorias.
                        Estas aves viajan desde regiones tan lejanas como Norteamérica y el sur de Sudamérica, en busca
                        de climas más cálidos y alimentos abundantes durante las diferentes estaciones del año. Los
                        humedales y reservas naturales de Bogotá, como el Parque Natural de los Cerros Orientales y el
                        Humedal de la Conejera, ofrecen hábitats ideales para estas aves migratorias. La presencia de
                        estas especies no solo enriquece la biodiversidad local, sino que también proporciona
                        oportunidades únicas para la investigación científica y la educación ambiental.</p>
                </div>
                <div className="column">
                    <h2>La Importancia del Ecosistema Bogotano</h2>
                    <p>El ecosistema de Bogotá juega un papel crucial en la conservación de la biodiversidad y en la
                        regulación del clima local. Los humedales, bosques y páramos que rodean la ciudad no solo son
                        hogar de una rica variedad de fauna y flora, sino que también actúan como reguladores naturales
                        del agua, ayudando a prevenir inundaciones y mantener la calidad del agua. Además, estos
                        ecosistemas son fundamentales para la captura de carbono y la producción de oxígeno,
                        contribuyendo significativamente a la mitigación del cambio climático. La preservación de estos
                        entornos naturales es esencial no solo para las aves y otros animales que dependen de ellos,
                        sino también para la salud y el bienestar de los habitantes de Bogotá.</p>
                </div>
            </div>
            <div className="gallery">
                <img src="/aves/assets/img/gorrion.jpg" alt="Gorrion"/>
                <img src="/aves/assets/img/buho.jpeg" alt="Buho"/>
                <img src="/aves/assets/img/colibri.jpeg" alt="Colibri"/>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Aves de Bogotá. Todos los derechos reservados.</p>
                <p>By Mauricio Herrera</p>
                <p>Estudiante UNIR</p>
            </footer>
        </div>
    );
};

export default Home;