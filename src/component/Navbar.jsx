import React from 'react'
import logo from '../asset/NxtWave_logo.png';
import person from '../asset/person.svg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation()
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">

                    <a className="navbar-brand"><img src={logo} alt="Logo" width="80" height="40" className="d-inline-block align-text-center" /></a>
                    <div>
                        {(location.pathname !== "/Nxtwave_assignement/" && location.pathname !== "/Nxtwave_assignement/addItem") &&
                            <Link to="/Nxtwave_assignement/addItem" className="navbar-brand">
                                <button type="button" className="btn btn-success btn-sm">ADD ITEM</button>
                            </Link>
                        }
                        {location.pathname !== "/Nxtwave_assignement/" &&
                            <img src={person} alt="Logo" width="50" height="35" className="d-inline-block align-text-center" />
                        }
                    </div>


                </div>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar