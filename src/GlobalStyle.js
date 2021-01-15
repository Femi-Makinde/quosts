import { createGlobalStyle, keyframes } from 'styled-components';

const placeHolderShimmer = keyframes`
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
`

const placeHolderShimmer_v = keyframes`
    0%{
        background-position: 0px 100%;
    }
    100%{
        background-position: 0px -100%;
    }
`


const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    *{
        box-sizing:border-box;
        outline:none;
        margin:0;
        padding:0;
        -webkit-tap-highlight-color: transparent;
    }

    *{
        will-change: background-color color;
        transition: color 50ms ease-in, background-color 50ms ease-in;
    }
    html,body{
        margin:0;
        font-size: 62.5%;
        padding:0;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
         user-select: none;
         font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }

    #root {
        min-height:100vh;
        height:100%;
    }

    .Flex{
        align-items:center;
        justify-content:center;
        display:flex;
    }

    .FlexHS{
        align-items:center;
        display:flex;
    }

    .Scroll-Y{
        overflow-y:auto;
        overflow-x:hidden;
        overflow: -moz-scrollbars-none; 
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display:none;
        }
    }

    .Scroll-Y-Show{
        overflow-y:scroll;
        overflow-x:hidden !important;
        /* overflow: -moz-scrollbars-none;  */
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            width:4px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius:7px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: white; 
        }
    }

    .Scroll-X{
        overflow-y:hidden;
        overflow-x:auto;
        overflow: -moz-scrollbars-none; 
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display:none;
        }
    }

    .noselect {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }


    .loading {
        animation-duration: 1.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: ${placeHolderShimmer};
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        height: 96px;
        position: relative;
    }

    .loading-v{
        animation-duration: 1.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: ${placeHolderShimmer_v};
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to bottom, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        height: 96px;
        position: relative;
    }

    .dot{
        margin: 0 8px;
        /* font-size: 20px; */
        /* font-weight:900; */
    }
`

export default GlobalStyle;