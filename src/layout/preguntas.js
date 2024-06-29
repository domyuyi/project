import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/workspaces/project/src/css/Preguntas.css';

const Preguntas = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div
                        className={`card btn-outline-primary ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(0)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i>
                            <strong>¿CUÁL ES LA DIFERENCIA ENTRE LOS PROCESADORES INTEL Y AMD?</strong>
                        </div>
                        {activeIndex === 0 &&
                            <div className="card-body respuesta">
                                <center>
                                    <br></br>
                                    Los procesadores Intel y AMD tienen diferencias en arquitectura, rendimiento y precios. Intel
                                    suele ofrecer un mejor rendimiento por núcleo, lo que es beneficioso para aplicaciones de un
                                    solo hilo, mientras que AMD ofrece más núcleos y hilos a un precio más competitivo, lo cual es
                                    ideal para multitarea y aplicaciones multihilo.
                                    <p></p>
                                </center>
                            </div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(1)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i>
                            <strong>¿ESTE PROCESADOR ES COMPATIBLE CON MI SISTEMA OPERATIVO</strong>
                        </div>
                        {activeIndex === 1 &&
                            <div className="card-body respuesta">
                                <center>
                                    <br></br>
                                    La mayoría de los procesadores modernos son compatibles con sistemas operativos recientes como
                                    Windows 10 y 11, macOS, y varias distribuciones de Linux. Consulta las especificaciones del
                                    procesador para asegurarte.
                                    <p></p>
                                </center>
                            </div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(2)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i>
                            <strong>¿CUÁL ES LA DIFERENCIA ENTRE UNA TARJETA GRÁFICA DE GAMA ALTA Y UNA DE GAMA MEDIA?</strong>
                        </div>
                        {activeIndex === 2 &&
                            <div className="card-body respuesta">
                                <center>
                                    <br></br>
                                    Las tarjetas gráficas de gama alta ofrecen un rendimiento superior, más VRAM, y características avanzadas
                                    como ray tracing en tiempo real y mejor soporte para resoluciones 4K. Las de gama media ofrecen un buen
                                    rendimiento a un precio más accesible, ideales para juegos en 1080p o 1440p.
                                    <p></p>
                                </center>
                            </div>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className={`card btn-outline-primary ${activeIndex === 3 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(3)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i>
                            <strong>¿QUÉ PROCESADOR ES MEJOR PARA JUEGOS?</strong>
                        </div>
                        {activeIndex === 3 &&
                            <div className="card-body respuesta">
                                <center>
                                    <br></br>
                                    Los procesadores Intel Core i5 e i7, así como los AMD Ryzen 5 y Ryzen 7, son
                                    excelentes opciones para juegos debido a su alto rendimiento por núcleo y buen
                                    equilibrio entre núcleos e hilos.
                                    <p></p>
                                </center>
                            </div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 4 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(4)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i>
                            <strong>¿QUÉ TRAJETA GRÁFICA NECESITO PARA EDICIÓN DE VIDEO PROFESIONAL</strong>
                        </div>
                        {activeIndex === 4 &&
                            <div className="card-body respuesta">
                                <center>
                                    <br></br>
                                    Los procesadores Intel Core i5 e i7, así como los AMD Ryzen 5 y Ryzen 7, son
                                    excelentes opciones para juegos debido a su alto rendimiento por núcleo y buen
                                    equilibrio entre núcleos e hilos.
                                    <p></p>
                                </center>
                            </div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 5 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(5)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i>
                            <strong>¿CUÁL ES LA DIFERENCIA ENTRE LOS PRODUCTOS NUEVOS, REACONDICIONADO Y USADOS?</strong>
                        </div>
                        {activeIndex === 5 &&
                            <div className="card-body respuesta">
                                <center>
                                    <br></br>
                                    Los productos nuevos son completamente nuevos y vienen con la garantía completa del fabricante.
                                    Los productos reacondicionados han sido restaurados a su estado original y probados para asegurarse
                                    de que funcionen correctamente, generalmente con una garantía limitada. Los productos usados pueden
                                    mostrar signos de uso y tener una garantía limitada o no tenerla.
                                    <p></p>
                                </center>
                            </div>}
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
        </div>

    );
};

export default Preguntas;
