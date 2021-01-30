import React from 'react';

const logout = () => {
  
}

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          
          <li className="nav-item dropdown">
            <a className="btn btn-danger" href="/" onClick={logout}>
              Logout
            </a>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}
