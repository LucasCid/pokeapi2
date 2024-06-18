// src/Navbar.jsx
import { NavLink } from 'react-router-dom';



export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <div className="navbar navbar-light bg-secondary">
      <img src='../public/pokeball.png' alt="" width="50rem" />
      <NavLink className={setActiveClass} to="/">
        <div className="hola">
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink className={setActiveClass} to="/pokemones">
        <div className="hola">
          <p>Pokemones</p>
        </div>
      </NavLink>
    </div>
  );
}
