import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="navbar-brand text-white" >
                E-cube IAM
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/users" className="navbar-brand text-white">
                Users
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/customize" className="navbar-brand text-white">
                Customize
            </Link>
        </nav>
    );
}

export default Navbar;