import React from 'react';

import './Skill.css';

const skill = (props) => (
    <article className="Skill" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <div className="Info">
            <div className="description">{props.description}</div>
        </div>
    </article>
);

export default skill;