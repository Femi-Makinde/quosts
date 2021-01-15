import styled from 'styled-components';

const StyledAddCoverImage = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    
    .Header{
        height:50px;
        border-bottom:0.5px solid ${props=>props.theme.borderColor};

        & > div{
            padding:0 16px;
            height:100%;
            h1{
                font-size:1.7rem;
                margin-left:10px;
                font-weight:600;
                color: ${props=>props.theme.primaryTextColor}
            }
        }
    }

    .Content{
        position: relative;
        flex-grow:1;

        .Images{
            padding:0 16px;
        }

        .FromFile{
            position:absolute;
            bottom: 20px;
            left:50%;
            transform: translateX(-50%);

            button{
                font-size:1.6rem;
                color: ${props=>props.theme.tertiaryTextColor}
            }
        }
    }
`;

export default StyledAddCoverImage;