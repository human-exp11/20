import React from 'react';  
import NavBar from "../components/NavBar";


function Header({ currentPage, handlePageChange }) {
  return (
<nav className="navbar py-4 navbar-dark bg-light d-flex justify-content-around">
  <h1>Luca Urbanowicz</h1>
    <NavBar handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}


export default Header;
