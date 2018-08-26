import React from 'react';
import IconCard from '../IconCard';
import './IconsGroup.css';

export default function IconsGroup(props) {

    const images = props.group.items && props.group.items.map(iconItem => <IconCard path={iconItem.path} fileName={iconItem.fileName} isHidden={iconItem.isHidden} baseUrl={props.baseUrl} />).filter(item => item);

    if (!images || (images && !images.length)) {
        return null;
    }

    return (
        <div className="icons-group">
            <h3 className="icons-group__title">{props.group.name}</h3>
            {images}
        </div>
    )
}
