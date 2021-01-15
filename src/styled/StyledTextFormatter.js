import styled from "styled-components";

const StyledTextFormatter = styled.p`
    font-size: 1.7rem;
    width:100%;
    overflow-wrap:break-word;
    position: absolute;
    top:100px;
    left:0;
    pointer-events:none;

    .BOLD{
        font-weight:600;
    }

    .ITALICS{
        font-style: italic;
    }

    .BOLD_AND_ITALICS{
        font-weight:600;
        font-style: italic;
    }

    .Affix{
        color: #ccc;
    }
    
`;

export default StyledTextFormatter;