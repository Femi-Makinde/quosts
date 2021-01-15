import styled from 'styled-components';
import { animated } from 'react-spring';

const ReorderListView = styled.div`
    height: calc(100vh - 70px);
    width:100%;
    padding: 0 24px;
    grid-template-columns: 20px 1fr;
    grid-template-rows:1fr;
    grid-column-gap:10px;
    width: 100%;
    display: grid;

    .PageNumber{

        
        div{
            height: ${props=>props.height + 'px'};

            p{
                font-size:1.3rem;
                color: ${props=>props.theme.primaryTextColor};
            }
        }
    }

    & > .Content{
        position: relative;
    }
`;


const ReorderListViewComponent = styled.div`
    position: absolute;
    overflow: visible;
    pointer-events: auto;
    width:100%;
    cursor: pointer;
    border-radius:7px;
    transform-origin: 50% 50% 0px;
`;

const StyledReorderListViewComponent = animated(ReorderListViewComponent)
const StyledReorderListView = animated(ReorderListView);
export { StyledReorderListView as default, StyledReorderListViewComponent}