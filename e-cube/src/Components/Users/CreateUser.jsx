import { Component } from "react";
import "./form.css";

class CreateUser extends Component {

    constructor() {
        super();

        this.state = {
            email: "",

            password: "",

            userId: "",

            firstName: "",

            lastName: "",

            isError: false
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        let target = e.target;

        let value = target.type === "checkbox" ? target.checked : target.value;

        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const user = { userId: this.state.userId, email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        console.log(user);
        await fetch('http://localhost:8080/ecube/api/user', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data.id);
                } else {
                    this.setState({ isError: true });
                    console.log(this.state.isError);
                }
            });

    }

    render() {
        return (
            <div className="page-class">
                <div>
                    <h4>
                        <strong>
                            <font color="blue">&nbsp;&nbsp;&nbsp;ADD USERS</font>
                        </strong>
                    </h4>
                </div>
                <form onSubmit={this.handleSubmit} className="form-class">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="name">
                            User Name
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                id="userId"
                                className="FormField__Input"
                                placeholder="Enter User Name"
                                name="userId"
                                value={this.state.userId}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="name">
                            First Name
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                id="firstName"
                                className="FormField__Input"
                                placeholder="Enter First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="name">
                            Last Name
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="password">
                            Password
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="password"
                                id="password"
                                className="FormField__Input"
                                placeholder="Enter your password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="email">
                            E-Mail Address
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="email"
                                id="email"
                                className="FormField__Input"
                                placeholder="Enter your email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Add User</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;