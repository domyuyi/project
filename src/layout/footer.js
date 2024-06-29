const Footer = () => {
    return <footer>
        <br></br>
        <br></br>
        <p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h5>
                            Información de creador
                    </h5>
                        <br></br>
                            <i>Correo electrónico :  pcbuldingws@upao.edu.pe</i><br></br>
                            <i>Teléfono           :  923-456-789</i>
                       
                    </div>
                    <div className="col-md-6">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><i><a href="#">Acerca de nosotros</a></i></li>
                            <li><i><a href="#">Servicios</a></i></li>
                            <li><i><a href="#">Contacto</a></i></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <small>© 2024  | Todos los derechos reservados</small>
                    </div>
                </div>
            </div>
        </p>
    </footer>;
}

export default Footer;