import React from 'react';
import './IconsGrid.css';
import IconsGroup from '../IconsGroup';

export default function IconsGrid(props) {
    const items =  props.iconoteka.items.map(group => {
        return group.name && <IconsGroup baseUrl={props.baseUrl} group={group} key={group.name} />
    });

    return items;
}
