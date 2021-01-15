import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components'

const Progress = ({radius,stroke,progress,text})=>{
    let normalizedRadius = radius - stroke * 2;
    let circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;
    let hasText = Boolean(text);
    let isWarning = Boolean(text) && Number(text) >= 0;
    let isError = Boolean(text) && Number(text) < 0 && Number(text) >= -9 ;
    let isBoundless = Boolean(text) && Number(text) < -9;
    const theme = useContext(ThemeContext);
    
    let style = {
        transformOrigin: "center center",
        transform: 'rotate(-90deg)'
    }

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            style = {{
                position: 'relative',
                fontSize:'10px',
                display: 'flex',
                alignItems:'center',
                justifyContent: 'center',
                transition: '.2s',
            }}
        >
        <circle
            stroke={isBoundless ? 'transparent':'#ccc'}
            fill="transparent"
            strokeDashoffset = {0}
            strokeWidth={ stroke }
            strokeDasharray={ circumference + ' ' + circumference }
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
        />
        <circle
            stroke={
                isWarning ? theme.warning: isError ? theme.danger :isBoundless ? 'transparent': theme.primaryMainColor
            }
            strokeLinecap = "round"
            fill="transparent"
            strokeWidth={ stroke }
            strokeDasharray={ circumference + ' ' + circumference }
            style={{ 
                strokeDashoffset,
                ...style
            }}
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
        />
        {
            hasText &&
            <text
            fill = {isBoundless ? theme.danger : 'black'}
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle">
                {text}
            </text>
        }
        </svg>
    );
}

export default Progress;