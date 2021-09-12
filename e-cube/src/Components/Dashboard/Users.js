import { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import CreateUser from "../Users/CreateUser";
import ViewUser from "../Users/ViewUser";
import Customize from "./Customize";
import "./Users.css";

class Users extends Component {
    render() {
        return (
            <div>
                <Router basename="">
                    <div className="whole">
                        <div className="linkside">
                            <div className="gap">
                                <Link
                                    to="/create-user"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                >
                                    Create User
                                </Link>
                            </div>
                            <div className="gap">
                                <Link
                                    to="/view-user"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                >
                                    View User
                                </Link>
                            </div>
                            <div className="gap">
                                <Link
                                    to="/activities"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                >
                                    User Activities
                                </Link>
                            </div>
                        </div>
                        <div className="barside">
                            <Route
                                exact
                                path="/create-user"
                                component={CreateUser}
                            />
                            <Route exact path="/activities" component={Customize} />
                            <Route exact path="/view-user" component={ViewUser} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Users;