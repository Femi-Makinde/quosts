import styled from "styled-components";

const StyledImage = styled.div`
    height: ${props=>props.height + 'px'};
    width: ${props=>props.width + 'px'};
    img{
        height:100%;
        width: 100%;
    }
`;

export default StyledImage;