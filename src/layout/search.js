import React, { useState, useEffect } from 'react';
import '/workspaces/project/src/css/Search.css';

const Search = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                setExpanded(!expanded);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [expanded]);

    return (
        <div className={`search-container ${expanded ? 'expanded' : ''}`} id="searchBox">
            <div className="search-box">
                <i className="bi bi-search"></i>
                <input type="text" id="searchInput" placeholder="Buscar componentes" />
                <span className="shortcut">Ctrl+K</span>
            </div>
        </div>
    );
};

export default Search;