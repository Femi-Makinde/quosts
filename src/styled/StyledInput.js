import styled from 'styled-components';

const StyledInput = styled.input`
        height:100%;
        width:100%;
        outline:none;
        border:none;
        font-size:1.4rem;
        caret-color: rgba(14,19,24,.2);
        font-family: 'Open Sans', sans-serif;
`;


const StyledInputWithIcon = styled.div`
        width:100%;
        height:40px;
        box-shadow: 0 0 0 1px rgba(14,19,24,.2);
        display:flex;
        position: relative;
        padding: 0 20px;
        border-radius:4px;
        overflow:hidden;

        .Input--Child{
            flex-grow:1;
        }

        .Input{
            width:100%;
            height:100%;
            position: absolute;
            left:0;
            right:0;

            input{
                /* border:1px solid transparent; */
                padding: 0 50px;
                font-size:1.3rem;
                background-color:${props=>props.theme.secondaryBackgroundColor1};
                ::-webkit-input-placeholder { /* Edge */
                    color: rgba(14,19,24,.5);
                }

                :-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color: rgba(14,19,24,.5);
                }

                ::placeholder {
                    color: rgba(14,19,24,.5);
                }
            }
        }

        .Icon{
            z-index:10;
            /* width: 50px; */
            padding:0 16px;
            position:absolute;
            flex-grow:0;
            display:flex;
            justify-content:center;
            align-items:center;
            top:50%;
            transform: translateY(-50%);

            :first-child{
                left:0;
                pointer-events:none;
                

            }

            :last-child{
                right:0;
            }
        }
`;


const StyledSearchDropDown = styled.div`
    box-shadow: ${props=>props.dropdown ? '':'0 0 0 1px rgba(14,19,24,.02), 0 2px 8px rgba(14,19,24,.15)'};
    background-color:${props=>props.theme.secondaryBackgroundColor1};
    border-radius: ${props=>props.dropdown ? '4px 4px 0px 0px':'4px'};
    position:relative;
    width:100%;

    .SearchResults{
        max-height:280px;
        position:absolute;
        top:0%;
        left:0;
        width:100%;
        background-color:${props=>props.theme.secondaryBackgroundColor1};
        box-shadow: 0 0 0 1px rgba(14,19,24,.02), 0 2px 8px rgba(14,19,24,.15);
        border-radius: 4px;
        padding-top:40px;
        z-index:50;

        ul{
            list-style-type:none;
            border-top: 1px solid rgba(14,19,24,.07);
            padding:10px 0;

            li{
                height:40px;
            }
        }
    }
    .InputField{
        box-shadow: none;
        border-radius: ${props=>props.dropdown ? '4px 4px 0px 0px':'4px'};
        z-index:55;
        
        .Icon{
            svg{
                height:20px;
                width:20px;
            }


            :last-child{
                svg{
                    height:25px;
                    width:25px;
                }
            }
        }
    }
`;

export {StyledInput,StyledInputWithIcon,StyledSearchDropDown};