import styled from "styled-components";
import { animated } from "react-spring";

const width = 280;
const padding = 32;

const StyledNavigation  = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    height: 100%;
    display: block;
    pointer-events: none;
    z-index:100;

    .NavigationOverlay{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        pointer-events:auto;
        will-change: opacity;
        transition: opacity .3s ease-in-out;
        background-color: rgba(0, 0, 0, .4);
        -webkit-tap-highlight-color: transparent;
        z-index: -1;
    }

    .NavigationContent{
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        width:${width+'px'};
        background-color: ${props=>props.theme.primaryBackgroundColor};
        padding:${`0px ${padding}px`};
        overflow: hidden;
        pointer-events: auto;
    }

    .NavigationContainer{
        height:100%;
        width:100%;
        overflow:hidden;
        pointer-events:auto
    }
`;



const NavigationPage = styled.div`
    position: absolute;
    top:0;
    width: ${`calc(${width}px - ${padding*2}px)`};
    height: 100vh;
    display: flex;
    pointer-events:auto;
    flex-direction:column;

    .NavigationPageHeader{
        height: 60px;
        display:flex;
        align-items:center;
        justify-content:flex-start;

        .Back{
            display:flex;
            align-items:center;
            font-size:1.4rem;
            margin:0 5px;
            color: ${props=>props.theme.secondaryTextColor};
            i{
                margin-right: 7px;
                margin-left:-8px;
            }
        }
    }

    .NavigationPageContent{
        flex-grow:1;
    }
`

const StyledNavigationItem = styled.div`
    box-sizing: border-box;
    padding: 12px 5px 12px 8px;
    position: relative;

    ::after{
        position: absolute;
        width: 6px;
        border-radius: 0px 4px 4px 0px;
        background-color: ${props=>props.theme.primaryMainColor};
        content: '';
        left:${-padding+'px'};
        top:0;
        bottom: 0;
    }

    ::before{
        position: absolute;
        background-color: rgba(0,0,0,.05);
        content: '';
        left:${-padding - 8 +'px'};
        right: ${-padding - 8 +'px'};
        top:0;
        bottom: 0;
        display:none;
    }

    :active::before{
        display:block;
    }

    &.notselected::after{
        display:none;
    }

    &.selected::after{
        display:block;
    }

    .Main{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        -webkit-tap-highlight-color: transparent;
        pointer-events:none;
        color: ${props=>props.theme.tertiaryTextColor};
        font-size:1.4rem;
        font-weight: 400;
    }
`;


const StyledNavigationPageContent = styled.div`
    height:100%;
    width:100%;

    .MainNavigationContent{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:100%;
        .MainContent{
            hr{
                margin: 30px 0;
                border: none;
                border-bottom: ${props=>`0.2px solid ${props.theme.borderColor}`};
            }
        }

        .AccountSection{
            margin-bottom: 30px;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            .Button{
                font-size:1.4rem;
                font-weight:500;
                color:${props=>props.theme.tertiaryTextColor};
                position:relative;
                padding: 12px 0;
                display: flex;
                justify-content: flex-start;

                ::after{
                    position: absolute;
                    width: 6px;
                    border-radius: 0px 4px 4px 0px;
                    background-color: ${props=>props.theme.primaryMainColor};
                    content: '';
                    left:${-padding+'px'};
                    top:0;
                    bottom: 0;
                    display:none;
                }

                ::before{
                    position: absolute;
                    background-color: rgba(0,0,0,.05);
                    content: '';
                    left:${-padding - 8 +'px'};
                    right: ${-padding - 8 +'px'};
                    top:0;
                    bottom: 0;
                    display:none;
                }

                :active::before{
                    display:block;
                }

                :active::after{
                    display:block;
                }
            }

        }
    }
`;





//EXPORT
const StyledNavigationPage = animated(NavigationPage);
export {StyledNavigation as default,StyledNavigationPage,StyledNavigationItem,StyledNavigationPageContent};