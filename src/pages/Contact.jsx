// Contact.jsx
import './Contact.css';

const Contact = () => {
    return (
        <div className="container contenedor-contacto">

            <div className="columns columnas">
                <div className="column">
                    <h4>¡Hola! Soy John Mauricio Herrera Díaz, músico y compositor, y educador interesado en el desarrollo web,
                        con un abanico de habilidades únicas y diversos intereses.</h4>
                    <img className="img-perfil" src="/aves/assets/img/mao.jpg" alt="Azulejo"/>

                    <p>Mi sólida formación musical, como músico guitarrista y compositor de la universidad Nacional de
                        Colombia, y complementada con una maestría en educación de la Universidad de los Andes, me ha
                        permitido dedicar más de una década y media a la enseñanza musical, fomentando el amor por el
                        arte en innumerables estudiantes del Distrito de Bogotá. Como docente, soy conocido por mi
                        amabilidad, profesionalismo y habilidad para fomentar un ambiente laboral positivo. En paralelo
                        a mi carrera en la educación, he desarrollado una pasión y habilidad para la programación web,
                        con un enfoque en el diseño de experiencia de usuario. Quiero manejar con mucha habilidad HTML,
                        CSS, Bootstrap, Tailwind, React, Angular y la gestión de proyectos a través de Git, GitLab y
                        GitHub. Actualmente, estoy expandiendo mis habilidades con una Máster Universitario en Diseño y
                        Desarrollo de Interfaz de Usuario Web en la Universidad de la Rioja. En pocas palabras, mi
                        perfil es una confluencia de arte, educación y tecnología, combinada con una ética de trabajo
                        insuperable y un compromiso para lograr los objetivos del equipo.
                    </p>
                </div>
                <div className="column contacto">
                    <h2>Contactame</h2>

                    <p>Hablemos por Linkedin</p>
                    <a href="https://co.linkedin.com/in/johnmaohd"
                       target="_blank">Linkedin</a>
                    <p>Hablemos por mi correo personal</p>
                    <a href="mailto:musicalimites@gmail.com">Gmail.com</a>
                    <p>Hablemos por mi correo institucional de la UNIR</p>
                    <a href="mailto:johnmauricio.herrera214@comunidadunir.net">comunidadunir.net</a>
                </div>

            </div>


            <footer className="footer">
                <p>&copy; 2024 Aves de Bogotá. Todos los derechos reservados.</p>
                <p>By Mauricio Herrera</p>
                <p>Estudiante UNIR</p>

            </footer>
        </div>
    );
};

export default Contact;