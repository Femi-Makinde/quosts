import styled from 'styled-components';



const StyledHorizontalScrollView = styled.div`
    width:100%;
    position:relative;

    .ScrollContainerHolder{
        margin: ${props=>props.matches ? '0 -16px':'0px'};
        position: relative;
        

        .ScrollContainer{
            width:100%;
            display:flex;
            flex-flow: row nowrap;
            scroll-padding-left: ${props=>props.matches ? '16px':0};
            display:flex;
            overflow-y: hidden;
            min-height: 1px;

            .ViewAllButton{
                padding-right: ${props=>props.matches ? '16px':'0'};
                flex-shrink:0;
                height:100%;
                flex-grow:1;
                display:flex;
                align-items:center;

                .Button{
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    justify-content:center;
                

                    p{
                        font-size:12px;
                        margin-top:10px;
                    }
                }
            }
        }
    }

    .DirectionButton{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        border: 1px solid rgba(14,19,24,.02);
        box-shadow: 0 0 12px 0 rgba(14,19,24,.07);
        border-radius:50%;
        z-index:40;

        &.Left{
            left: -20px;
            box-shadow: 0 0 12px 0 rgba(14,19,24,.07);
        }

        &.Right{
            right: -20px;
            box-shadow: 0 0 12px 0 rgba(14,19,24,.07);
        }
    }
`;


export {StyledHorizontalScrollView as default} ;