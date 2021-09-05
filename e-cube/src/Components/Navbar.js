import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="navbar-brand text-white" >
                E-cube IAM
            </div>
            <Link to="/users" class="navbar-brand text-white">
                Users
            </Link>
            <Link to="/customize" class="navbar-brand text-white">
                Customize
            </Link>
        </nav>
    );
}

export default Navbar;