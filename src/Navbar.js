import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SD Kutamendalah</h1>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/">About</Link>
        <Link to="/pendaftar">Cek Pendaftar</Link>
        <Link to="/create" className="daftar">Daftar</Link>
      </div>
    </nav>
  );
};

export default Navbar;
