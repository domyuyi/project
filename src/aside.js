import React, { useEffect } from 'react';
const feather = require('feather-icons');
import './style.css';

setTimeout(() => {
  feather.replace();
}, 1000);

const Aside = () => {
  return (
    <aside className="aside-container">
      <h2 className="text-center mb-4">Registro de Usuario</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Ingrese su nombre"
            style={{ color: '#000000' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Ingrese su apellido"
            style={{ color: '#000000' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <i data-feather="mail" className="me-2"></i>
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="ejemplo@gmail.com"
            required
            style={{ color: '#000000' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <i data-feather="phone" className="me-2"></i>
            Número de Celular
          </label>
          <div className="d-flex">
            <span className="input-group-text" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>+51</span>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="999999999"
              style={{ color: '#000000' }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <i data-feather="lock" className="me-2"></i>
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingrese su contraseña"
            style={{ color: '#000000' }}
          />
        </div>
        
        <div className="text-center mt-4">
        <button
          className="btn btn-outline-light"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.color = buttonHoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '';
            e.currentTarget.style.color = buttonStyle.color;
          }}
          aria-label="Registrarse"
        >
          <i data-feather="fas fa-user-plus" className="me-1"></i> Registrase
        </button>

        
      </div>

        <button
          type="button"
          className="btn btn-secondary d-block w-100 mb-3"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <i className="fab fa-facebook me-2"></i>
          <i className="fab fa-google me-2"></i>
          <i className="fab fa-apple me-2"></i>
          <i className="fab fa-windows me-2"></i>
          Regístrate con tu correo
        </button>

      </form>
      <div className="text-center mt-4">
        <p>¿Ya tienes una cuenta?</p>
        <button
          className="btn btn-outline-light"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.color = buttonHoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '';
            e.currentTarget.style.color = buttonStyle.color;
          }}
          aria-label="Iniciar Sesión"
        >
          <i data-feather="log-in" className="me-1"></i> Iniciar Sesión
        </button>
      </div>
    </aside>
  );
}

const buttonStyle = {
  color: '#FFFFFF',
  borderColor: '#FFFFFF',
  transition: 'background-color 0.3s, color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
};

export default Aside;