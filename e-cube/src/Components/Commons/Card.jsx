import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, links }) => {
    return (
        <div className="btn-class">
            <Link to={links} style={{ textDecoration: 'none', color: 'white', paddingTop: '50px', paddingLeft: '150px', flex: 'centre' }} >
                {title}
            </Link>
        </div>

    );
};

export default Card;