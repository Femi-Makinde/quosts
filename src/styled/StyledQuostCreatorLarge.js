import styled from "styled-components"
import { StyledActions } from "./StyledQuostsCreator";

const StyledQuostCreatorLarge = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: minmax(250px, 300px) minmax(calc(100% - 350px),1fr);
    grid-template-rows:60px  1fr;

    header{
        grid-column: 2 / span 1;
        border-bottom: 1px solid ${props=>props.theme.borderColor2};

        .Container{
            height:100%;
            display:flex;
            justify-content:space-between;
            padding:0 24px;
            
            .CurrentPage{
                h1{
                    font-size:1.6rem;
                    color: ${props=>props.theme.primaryTextColor};
                }
            }
        }
    }

    aside{
        grid-column: 1 / span 1;
        grid-row: 1 / -1;
        border-right: 1px solid ${props=>props.theme.borderColor2};


        .CreatedPages{
            display:flex;
            flex-direction:column;

            .Header{
                height: 60px;
                padding:0 24px;

                h1{
                    font-size:1.7rem;
                    color: ${props=>props.theme.primaryTextColor};
                }
            }

            .Pages{
                flex-grow:1;
                height: calc(100% - 60px);
                & > div{
                    padding-bottom:80px;
                    height:100%;
                }
            }
        }
    }

    main{
        grid-column: 2 / -1;
        grid-row: 2 / -1;
        transition: all 2s;
        background:yellow;
        
        .Main{
            background: ${props=>props.theme.secondaryBackgroundColor1};
            height:100%;
            display:flex;
            flex-direction:column;
            width:100%;

            .Editor{
                height: 350px;
                margin-bottom: 15px;
                width:100%;
                background:${props=>props.theme.primaryBackgroundColor};
                display:flex;
                flex-direction:column;
                    
                .QuostContent{
                    width: 100%;
                    flex-grow:1;
                    display:flex;
                    flex-direction:column;

                    .Text{
                        width:100%;
                        flex-grow:1;
                        padding: 16px 24px;
                    }

                    .Addons{
                        width:100%;
                        height:150px;
                    }
                } 


                .EditorFooter{
                    width: 100%;
                    height: 60px;
                    
                    .Content{
                        height:100%;
                        padding: 0 24px;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        .Addons{
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            height:100%;

                            .Buttons{
                                display:flex;

                                button{
                                    margin-right: 30px;
                                    svg{
                                        height:27px;
                                        width:27px;
                                    }
                                }
                            }
                        }

                        .TextActions{
                            display:flex;
                            align-items: center;
                            .Action{
                                
                                height: 36px;
                                width: 36px;
                                display:flex;
                                align-items:center;

                                :last-child{
                                    border-left: 1px solid ${props=>props.theme.borderColor1};
                                    padding-left:10px;
                                    box-sizing: content-box;
                                }

                                :not(:last-child){
                                    cursor: pointer;
                                    margin-left: 10px;
                                    svg{
                                        width: 22px;
                                        height: 22px;
                                    }
                                }
                            }
                        }
                    }
                }  
            }

            .Options-Container{
                width:100%;
                flex-grow:1;
                background:${props=>props.theme.primaryBackgroundColor};
                display:flex;
                align-items:center;
            }
        }
    }
`;



const StyledActionsLarge = styled(StyledActions)`
        padding:0;
    .Actions{
        .Button{
            svg{
                color: ${props=>props.theme.primaryMainColor};
                width: 22px;
                height:22px;
            }
        }
    }
`;

export { StyledQuostCreatorLarge as default, StyledActionsLarge};