import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';



export const CreatedQuostsShowIcon = (props)=>{
    const theme = useContext(ThemeContext);
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="1.75" y="4.75" width="17.5" height="17.5" rx="1.25" strokeWidth="1.5" stroke = "currentColor" {...props}>
            </rect>
            <path stroke = 'none' fill = {theme.iconColor2} d="M4.75 1a.75.75 0 0 0 0 1.5H19.4c1.16 0 2.1.94 2.1 2.1v14.65a.75.75 0 0 0 1.5 0V4.2A3.2 3.2 0 0 0 19.8 1H4.75z">
            </path>
            
        </svg>
    );
}


export const Cancel = (props)=>{
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path d="M13.06 12.15l5.02-5.03a.75.75 0 10-1.06-1.06L12 11.1 6.62 5.7a.75.75 0 10-1.06 1.06l5.38 5.38-5.23 5.23a.75.75 0 101.06 1.06L12 13.2l4.88 4.87a.75.75 0 101.06-1.06l-4.88-4.87z" {...props}>
        </path>
    </svg>
    );
}


export const Add = (props)=>{
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width = {props.width || "20"} height = {props.height || "20"}>
        <line {...props} x1="12" y1="5" x2="12" y2="19"/>
        <line {...props} x1="5" y1="12" x2="19" y2="12"/>
    </svg>
    );
}

export const Check = ({width = "24",height = "24",...props})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <polyline {...props} points="20 6 9 17 4 12"/>
        </svg>
    );
}

export const Time = (props)=>{
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm96,240H256a16,16,0,0,1-16-16V128a16,16,0,0,1,32,0V256h80a16,16,0,0,1,0,32Z" {...props}/>
    </svg>
    );
}


export const ChevronRight = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z">
            </path>
        </svg>
    );
}

export const ChevronLeft = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.53 11.71L5.99 8.18a.25.25 0 0 1 0-.36L9.53 4.3a.75.75 0 1 0-1.06-1.06L4.93 6.76c-.68.69-.68 1.8 0 2.48l3.54 3.53a.75.75 0 0 0 1.06-1.06z">
            </path>
        </svg>
    );
}

export const ChevronUp = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M11.71 6.47l-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z">
            </path>
        </svg>
    );
}

export const CopyIcon = ()=>{
    return (
        <svg width="20" height="20" fillRule = "evenodd" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3.25H5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h1V14H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h-1.25V4a.75.75 0 0 0-.75-.75zm-2 4h6a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V8A.75.75 0 0 1 9 7.25zM7 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8z" fill="currentColor"></path>
        </svg>
    );
}

export const DeleteIcon = ()=>{
    return (
        <svg width="20" height="20" fillRule = "evenodd" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3.25h2c.69 0 1.25.56 1.25 1.25V5h-4.5v-.5c0-.69.56-1.25 1.25-1.25zM6.5 5v-.5A2.5 2.5 0 0 1 9 2h2a2.5 2.5 0 0 1 2.5 2.5V5h3.375a.625.625 0 1 1 0 1.25H16V15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6.25h-.875a.625.625 0 1 1 0-1.25H6.5zm7 1.25H5.25V15c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 14.75 15V6.25H13.5zM8.125 8h-.25v6h1.25V8h-1zm2.75 1V8h1.25v6h-1.25V9z" fill="currentColor">
            </path>
        </svg>
    );
}

export const MoreHorizontal = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"/>
            <circle cx="19" cy="12" r="1"/>
            <circle cx="5" cy="12" r="1"/>
        </svg>   
    );
}

export const File = (props)=>{
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" {...props}/>
        <polyline points="13 2 13 9 20 9" {...props}/>
    </svg>   
    );
}




export const ForwardIcon = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.55 5.78l5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z"></path>
        </svg>
    );
}

export const BackIcon = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15.45 17.97L9.5 12.01a.25.25 0 0 1 0-.36l5.87-5.87a.75.75 0 0 0-1.06-1.06l-5.87 5.87c-.69.68-.69 1.8 0 2.48l5.96 5.96a.75.75 0 0 0 1.06-1.06z"></path>
        </svg>
    );
}

export const BoldIcon = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
        </svg>
    )
}

export const ItalicsIcon = (props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
        </svg>
    )
}



export const UnderlineIcon = (props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/>
        <line x1="4" y1="21" x2="20" y2="21"/>
        </svg>
    );
}

export const Link = (props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path {...props} d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path {...props} d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>   
    );
}


export const ArrowLeft = ({width,height,...props})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line {...props} x1="19" y1="12" x2="5" y2="12"/>
            <polyline {...props} points="12 19 5 12 12 5"/>
        </svg> 
    );
}


export const Photo = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>  
    );
}


export const Equation = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>  
    );
}


export const Code = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>  
    );
}

export const Search = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
    );
}