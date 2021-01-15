import styled from 'styled-components';

const StyledQuostsCreator = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position:relative;

    .HeaderSection{
        height: 30px;
        position:fixed;
        top: 0;
        width:100%;
        z-index:50;
    }

    .ActionSection{
        height: 40px;
        position:fixed;
        top: 30px;
        width:100%;
        z-index:50;
    }

    .ContentSection{
        width:100%;
        overflow:hidden;
        height:100vh;
    }

    .FooterSection{
        height: 80px;
        position:fixed;
        width:100%;
        z-index:50;
    }
`;

const StyledActions = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    padding: 0 16px;
    align-items:center;

    .Icon{
        justify-content:center;
        height: 30px;
        width:30px;
        border-radius:3px;
        display:flex;
        align-items:center;
        
        
        i,svg{
            transition: color .1s, background-color .1s;
            color: ${props=>props.theme.secondaryTextColor};
        }
        
        :active{
            background-color: rgba(0,0,0,.03);
            i,svg{
                color: ${props=>props.theme.primaryTextColor};
            }
        }
    }

    .QuostNumber{
        span{
            font-size:14px;
            color: ${props=>props.theme.secondaryTextColor};
        }
    }

    .Actions{
        display:flex;

        .Action{
            margin-left:20px;
            
            i{
                font-size: 22px;

                &.small-16{
                    font-size:18px
                }

                &.small-18{
                    font-size:20px;
                }
            }
        }

    }

`;

const StyledFooter = styled.div`
    height: 100%;
    width: 100%;
`;



const StyledButtonsFooter = styled.div`
    height:80px;
    width:100%;
    display:flex;
    justify-content: space-between;
    padding:0 16px;
    position:absolute;
    align-items:center;

    .Button{
        box-shadow: 0px 5px 10px rgba(0,0,0,.15);
            .Content{
            position:relative;
            display:flex;
            align-items:center;
            justify-content:center;
            height:55px;
            width:55px;

            &.AllQuosts{
                background-color: ${props=>props.theme.secondaryBackgroundColor2};
                
            }

            &.EditQuost{
                background-color: ${props=>props.theme.primaryMainColor};

                i{
                    color: ${props=>props.theme.iconColor1};
                }
            }

            span{
                position:absolute;
                top:53%;
                width:18px;
                left: 30%;
                transform: translateY(-50%);
                font-size:1rem;
                color: ${props=>props.theme.tertiaryTextColor}
            }
        }
    }
`;




const StyledHeader = styled.div`
    width:100%;
    height:100%;
    padding:0 16px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export { StyledQuostsCreator as default, StyledFooter, StyledHeader,  StyledActions,StyledButtonsFooter}