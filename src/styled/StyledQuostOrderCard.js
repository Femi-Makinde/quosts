import styled from 'styled-components';

const HEIGHT = 150;
const StyledQuostOrderCard = styled.div`
    height: ${HEIGHT + 'px'};
    color: ${props=>props.theme.primaryTextColor};
    position: relative;

    .Content{
        background-color: ${props=>props.theme.secondaryBackgroundColor1};
        border-radius:7px;
        height:100%;

        .ContentContainer{
            padding:10px;
            display:flex;
            flex-direction:column;
            height:100%;
            justify-content:space-between;

            .Question{
                p{
                    font-size: 1.1rem;
                }
            }

            .Options{
                
                ul{
                    list-style-type:none;
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    grid-gap:5px;

                    li{
                        .quost-option{
                            height:25px;
                            border-radius:10px;
                            .InputField{
                                input,span{
                                    font-size:10px;
                                    padding-left:5px;
                                }
                                
                            }
                            .OptionSelector{
                                width:25px;

                                .selector{
                                    height: 14px;
                                    width: 14px;

                                    i{
                                        font-size:8;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }


    .Buttons{
        position:absolute;
        right: 3px;
        bottom: 3px;
        display: flex;

        svg{
            width: 18px;
            height: 18px;
        }
        display:none;
    }


    :hover{
        .Buttons{
            display:  flex;
        }
    }
`;


export default StyledQuostOrderCard;