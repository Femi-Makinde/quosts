import styled from 'styled-components';
import { animated } from 'react-spring';

const OrderQuostPages = styled.div`
    position: relative;
    /* height:700px; */
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 200px;
    grid-gap:10px;
    padding:10px;
`;


const OrderQuostPagesComponent = styled.div`
    overflow: visible;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    background: #b7bcb9;
    height:100%;
    width: 100%;
    height:200px;
    border-radius:10px;
`;

const StyledOrderQuostPagesComponent = animated(OrderQuostPagesComponent)
const StyledOrderQuostPages = animated(OrderQuostPages);
export { StyledOrderQuostPages as default, StyledOrderQuostPagesComponent}