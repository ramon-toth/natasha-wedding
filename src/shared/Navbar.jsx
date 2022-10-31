import {Link} from "react-router-dom";

function Navbar() {
  const isAdmin = window.sessionStorage.getItem('token')


  const adminLinks = <>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
    <li>
      <Link to="/auth/logout">Logout</Link>
    </li>
  </>

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rsvp">RSVP</Link>
            </li>
            {isAdmin ? adminLinks : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
