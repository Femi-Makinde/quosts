import styled from 'styled-components';
import  { devices } from '../utils/styledUtils';

const StyledQuost = styled.div`
    padding-right:8px;
    width: 300px;
    /* max-width:450px;
    min-width:350px; */
    flex-shrink:0;
    
    

    :first-child{
        padding-left: 16px;
    }

    :last-child{
        padding-right: 16px
    }
    
    
    .Container{
        
        
        .Image{
            width:100%;
            height:220px;
            overflow:hidden;
            border-radius:5px;
            border: 1px solid rgba(14,19,24,.07);
            
            img{
                height:100%;
                width:100%;
                object-fit:cover;
                overflow: hidden;
            }
        }

        .Details{
            .Details-Container{
                margin-top:14px;

                .Title{
                    p{
                        font-size: 1.5rem;
                        font-weight:700;
                    }
                }

                .details{
                    font-size:1.2rem;
                    color: ${props=>props.theme.secondaryTextColor};
                    margin-top:5px;
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
            .Image{

            }
        }
    `}
`;

export default StyledQuost;