import React from 'react';
import '/workspaces/project/src/css/TopSelection.css';


const TopSelection = () => {
    return (
        <div className="top-selection">
            <h2>Selección TOP</h2>
            <br/>
            <div className="top-selection-grid">
                <div className="top-item">
                    <img src="https://mipclista.com/img/cms/a2-3-600x400.png" alt="Gamer" />
                </div>
                <div className="top-item">
                    <img src="https://mipclista.com/img/cms/ingenieriadi.png" alt="Ingeniería y Diseño Gráfico" />
                </div>
                <div className="top-item">
                    <img src="https://mipclista.com/img/cms/oficina-1.png" alt="Oficina" />
                </div>
            </div>
        </div>
    );
};

export default TopSelection;