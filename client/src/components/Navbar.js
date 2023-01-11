import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div>
                <Link to="/" className="nav-link">Site Home</Link>
            </div>
            <div>
                <Link to="/" className="nav-link ">SignUp/Login</Link>
            </div>
            <div>
                <Link to="/profile" className="nav-link">Profile</Link>
            </div>
        </div>
    </nav>
  )
}
export default Navbar