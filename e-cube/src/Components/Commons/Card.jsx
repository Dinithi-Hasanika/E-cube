import React from "react";
import "./Card.css";
const Card = ({ title }) => {
    return (
        <button type="button" class="btn-class">{title}</button>
    );
};

export default Card;