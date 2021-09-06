import { Component } from "react";
import Card from "../Commons/Card";
class Roles extends Component {
    render() {
        return (<div>
            <Card title="VIEW ROLES" links="/view"></Card>
            <Card title="ADD ROLES" links="/add"></Card>
            <Card title="DELETE ROLES" links="/delete"></Card>
            <Card title="EDIT ROLES" links="/edit"></Card>
        </div>);
    }
}

export default Roles;