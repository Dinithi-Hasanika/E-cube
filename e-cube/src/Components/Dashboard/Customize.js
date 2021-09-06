import { Component } from "react";
import "./Users.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Roles from "../Roles/Roles";
import Permissions from "../Permissions/Permissions";

class Customize extends Component {
    render() {
        return (
            <div>
                <Router basename="/">
                    <div className="whole">
                        <div className="linkside">
                            <div className="gap">
                                <Link
                                    to="/roles"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                >
                                    ROLES
                                </Link>
                            </div>
                            <div className="gap">
                                <Link
                                    to="/permissions"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                >
                                    PERMISSIONS
                                </Link>
                            </div>

                        </div>
                        <div className="barside">
                            <Route
                                exact
                                path="/roles"
                                component={Roles}
                            />
                            <Route exact path="/permissions" component={Permissions} />
                            <Route exact path="/view" component={Permissions} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Customize;