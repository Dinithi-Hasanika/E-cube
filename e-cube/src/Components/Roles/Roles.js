import { Component } from "react";
import Card from "../Commons/Card";
class Roles extends Component {
    render() {
        return (<div>
            <Card title="VIEW ROLES" links="/view-roles"></Card>
            <Card title="ADD ROLES" links="/add-roles"></Card>
            <Card title="DELETE ROLES" links="/delete-roles"></Card>
            <Card title="EDIT ROLES" links="/edit-roles"></Card>
        </div>);
    }
}

export default Roles;