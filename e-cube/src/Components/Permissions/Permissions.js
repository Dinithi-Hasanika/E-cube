import { Component } from "react";
import Card from "../Commons/Card";
class Permissions extends Component {
    render() {
        return (<div><Card title="VIEW PERMISSIONS" links="/view-permissions"></Card>
            <Card title="ADD PERMISSIONS" links="/add-permissions"></Card>
            <Card title="DELETE PERMISSIONS" links="/delete-permissions"></Card>
            <Card title="CHANGE PERMISSIONS" links="/change-permissions"></Card></div>);
    }
}

export default Permissions;