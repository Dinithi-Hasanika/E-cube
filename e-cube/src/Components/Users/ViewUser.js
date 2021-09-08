import { Component } from "react";

class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {

        fetch('http://localhost:8080/ecube/api/users', { Method: 'GET' })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                })
            });
    }
    render() {
        return (
            <div>
                <div>
                    <h4>
                        <strong>
                            <font color="blue">&nbsp;&nbsp;&nbsp;ALL USERS</font>
                        </strong>
                    </h4>
                </div>
                <div>
                    <table class="table table-stripe">
                        <tr>
                            <th>
                                <font color="lightseagreen">User Name</font>
                            </th>
                            <th>
                                <font color="lightseagreen">Email</font>
                            </th>
                        </tr>

                        <tbody>
                            {this.state.users.map((newUser) => {

                                return (
                                    <tr>
                                        <td>{newUser.userId}</td>

                                        <td>{newUser.email}</td>

                                        <button
                                            class="btn btn-danger"
                                            style={{ color: 'black' }}
                                        >
                                            DELETE
                                        </button>
                                    </tr>
                                );
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewUser;