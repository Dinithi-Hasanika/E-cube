import { Component } from "react";
import Card from "../Commons/Card";
class Roles extends Component {
    render() {
        return (<div>
            <Card title="VIEW ROLES"></Card>
            <Card title="ADD ROLES"></Card>
            <Card title="DELETE ROLES"></Card>
            <Card title="EDIT ROLES"></Card>
        </div>);
    }
}

export default Roles;