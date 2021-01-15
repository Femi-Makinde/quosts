import React from 'react';

const Icon = ({icon, style, onClick, classNames = [], modifier = 'outlined'})=>{
    const clN = `material-icons-${modifier} ${classNames.join(' ')}`
    return (
        <i style = {style} onClick = {onClick && onClick} className = {clN}>{icon}</i>
    )
}

export default Icon;