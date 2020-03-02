import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title ,icon }) =>{

   

    const NavLink=(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/Home">Home</Link>
            </li>
        </Fragment>
    );

    return (
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            {/* <!-- Brand --> */}
    <span className=" navbar-brand" ><img src="https://img.icons8.com/color/48/000000/house-stark.png"/> {title} </span>

            {/* <!-- Toggler/collapsibe Button --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar links --> */}
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    

                    {NavLink}

                    

                </ul>
            </div>
        </nav>

        
    );
}

Navbar.propTypes={
    
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Game Of Throne Battle",
    icon : "fas fa-id-card-alt"
}

export default Navbar



