import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledSubCategory = styled.div`
    padding-right:8px;
    /* overflow:hidden; */
    :first-child{
        padding-left: 16px;
    }

    :last-child{
        padding-right: 16px
    }
    
    

    .Container{
        width: 104px;
        border-radius:4px;
        overflow: hidden;
        border: 1px solid rgba(14,19,24,.07);

        a{
            width:100%;
            height:100%;
            text-decoration: none;

            .Content{
                position:relative;
                height:100%;
                height:46px;
                
                :hover{
                        .Background{
                            img{
                                transform: scale(1.1)
                            }
                        }

                        .Title{
                            background-color: rgba(14, 19, 24, 0.35);
                        }
                    }

                .Content--Child{
                    position: absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                }
                .Background{
                    height: 100%;
                    
                    img{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                        position:relative;
                        transition: transform 300ms;
                        transform-origin: 50 50;
                        transform-origin: 50px -10px;
                    }
                }

                .Title{
                    font-size: 1.2rem;
                    padding: 0 8px;
                    z-index:10;
                    background-color: rgba(14, 19, 24, 0.25);
                    transition: background-color 300ms;

                

                    .Flex{
                        height:100%;
                        color:white;
                        font-weight:700;
                    }
                }

            }
        }

    }


    ${devices.scrollMatch`
        padding-right:16px;

        :last-child{
            padding-right:0;
        }

        :first-child{
            padding-left: 0px;
        }
        .Container{
            width: 176px;
            height:72px;
            a{
                .Content{
                    .Title{
                        .Flex{
                            font-size:1.5rem;
                        }
                    }
                }
            }
        }
    `}
`;

export default StyledSubCategory;