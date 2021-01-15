import styled from "styled-components";

const StyledAddPopup = styled.div`
    min-height: 250px;
    .AddOns{
        padding: 40px 16px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 10px;

        .AddOn{
            margin: 10px 0;
            .AddBox{
                display: flex;
                flex-direction: column;
                align-items:center;

                p{
                    font-size: 1.2rem;
                }

            }
        }
    }
`;


const StyledImagePopup = styled.div`
    min-height: 200px;
    display:flex;
    align-items:center;

    .ImagePopup{
        padding: 20px;
        width: 100%;

        .Type{
            width:100%;

            .button{
                height:80px;
            }

            .FakeInput{
                position: relative;
                height:100%;

                .FC{
                    position:absolute;
                    top:0;
                    left:0;
                    bottom:0;
                    right:0;
                }
                input{
                    width: 100%;
                    height:100%;
                    opacity: 0;
                    
                }
            }

            button p{
                margin-left:10px;
                color: white;
            }
        }

        .LinkField{
            padding: 20px 0px;

            .LinkInput{

            }

        }
    }
`;


export { StyledAddPopup, StyledImagePopup }