import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/Screenshot_2024-02-11_181501-removebg-preview.png";
import { Component } from "react";
import "./../../pages/components/navbar.css";
import { doLogout, isAuthenticated } from "../service/authService";

class Navbar extends Component {
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        const handleLogout = () => {
            const confirmLogout = window.confirm('Are you sure you want to logout?');
            if (confirmLogout) {
                doLogout();
                window.location.href = '/';
            }
        };

        const userName = localStorage.getItem('userName');

        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <NavLink to="/"><img src={logo} alt="ComicNook" width="140px" /></NavLink>
                </h1>

                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/New" className="nav-link">New</NavLink>
                    </li>

                    {isAuthenticated() && userName ? (
                        <li>
                            <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="nav-link">Sign-In</Link>
                            </li>
                            <li>
                                <Link to="/register" className="nav-link">Sign-Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
