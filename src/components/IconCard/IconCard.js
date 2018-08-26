import React from 'react';
import './IconCard.css';

export default function IconCard(props) {
    const icon = require(`../../iconoteka/${props.path}`);
    return !props.isHidden && (<div className="icon-card">
        <img className="icon-card__icon" src={props.baseUrl + icon} alt="icon"/>
        <span className="icon-card__title">Icon Name</span>
        <a className="icon-card__download" download={props.path} href={props.baseUrl + icon}>Download</a>
    </div>);

}
