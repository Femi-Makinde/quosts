import styled from 'styled-components';
import { devices } from '../utils/styledUtils';


const HEIGHT_SMALL_DEVICE = 60
const HEIGHT_LARGE_DEVICE = 70
const StyledQuostCategoryPage = styled.div`
    width:100%;

    .Header-Small-Device{
        height:${HEIGHT_SMALL_DEVICE + 'px'};
        width:100%;
        position:fixed;
        top:0;
        z-index:100;
        background-color: ${props=>props.theme.primaryBackgroundColor};
        border:none;
        box-shadow: 0 1px rgba(14,19,24,.07);

        .Header-container{
            padding: 0 16px;
            height:100%;
            width:100%;
            display:flex;
            align-items:center;

            .SearchDropDown{
                box-shadow:none;
            }
        }
    }

    main{
        height:100%;
        /* padding-top:${HEIGHT_SMALL_DEVICE + 'px'}; */
        padding-bottom: ${500 + 'px'};
        overflow-y:scroll;
        .Wallpaper{
        .Wallpaper--Container{
            height:280px;
            position:relative;

            .Wallpaper--Child{
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
            }

            .BackgroundImage{
                height:100%;
                width:100%;
                overflow:hidden;

                img{
                    height:100%;
                    width:100%;
                    object-position:center;
                    object-fit:cover;
                }
            }

            & > .Content{
                background-color: rgba(14, 19, 24, 0.25);
                padding: 0 16px;
                height:100%;
                width:100%;

                .Content-Container{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    height:100%;
                    width:100%;
                    
                    .Content-Container-Child{
                        width:100%;
                        max-width:600px;

                        .Title{
                            margin-bottom:30px;
                            h1{
                                text-align:center;
                                color:white;
                                font-weight: 700;
                                font-size: 3rem;
                                letter-spacing: -.12rem;
                                line-height: 1.3;
                            }
                        }

                        .Description{
                            margin-top:20px;
                            p{
                                text-align:center; 
                                font-size:1.3rem;
                                color:white;
                                font-weight:400;
                            }
                        }
                    }
                }
            }
        }
        }

    .SubCategories{
        margin-top:16px;
        padding: 0 16px;
    }

    .TopQuosts{
        margin-top:32px;
        padding: 0 16px;

        .TopQuosts-Container{
            .TopQuostContent{
                .heading{
                    h1{
                        font-size: 2rem;
                        margin-bottom:20px;
                        color: ${props=>props.theme.primaryTextColor};
                    }
                }
            }
        }
    }

    }

    ${devices.mobileM`

        main{
            .Wallpaper{
                .Wallpaper--Container{
                    height:344px;
                }
            }
        }
    `}


    ${devices.mobileXL`
        .Header-Small-Device{
            // display:none;
        }
        main{
            .TopQuosts{
                margin-top:64px;

                .TopQuosts-Container{
                    .TopQuostContent{
                        .heading{
                            h1{
                                font-size: 2.4rem;
                                margin-bottom:20px;
                                color: ${props=>props.theme.primaryTextColor};
                            }
                        }
                    }
                    
                }
            }
        }
    `};

    ${devices.scrollMatch`
        header{
            border-bottom:1px solid ${props=>props.theme.borderColor2};
        }

        main{

            .Wallpaper{
                padding: 32px 32px 0px;

                .Wallpaper--Container{
                    .Wallpaper--Child{
                        border-radius:7px;
                    }

                    .Content{
                        .Content-Container{
                            .Content-Container-Child{
                                .Title{
                                    h1{
                                        font-size:4.8rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }

           .SubCategories{
                padding: 0 32px;

                .SubCategories--Container{
                    
                }
            }

            .TopQuosts{
                padding: 0 32px;

                .TopQuosts--Container{
                    
                }
            }
        }
    `}

    ${devices.laptop`
            header{
                height:70px;
            }

            main{
                padding-top: ${HEIGHT_LARGE_DEVICE + 'px'};

                .Wallpaper{


                    .Wallpaper--Container{

                        .Wallpaper--Child{

                        }

                        .Content{
                            .Content-Container{
                                .Content-Container-Child{
                                    .Title{
                                        h1{

                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            
            }
        `}
`


export default StyledQuostCategoryPage;