import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div nav-title-bar>
        <div id="nav-bar">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/players">
            All Players
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;