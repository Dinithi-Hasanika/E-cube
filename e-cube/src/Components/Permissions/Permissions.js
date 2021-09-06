import { Component } from "react";
import Card from "../Commons/Card";
class Permissions extends Component {
    render() {
        return (<div><Card title="VIEW PERMISSIONS"></Card>
            <Card title="ADD PERMISSIONS"></Card>
            <Card title="DELETE PERMISSIONS"></Card>
            <Card title="CHANGE PERMISSIONS"></Card></div>);
    }
}

export default Permissions;