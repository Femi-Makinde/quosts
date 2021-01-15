const { default: styled } = require("styled-components");

const StyledCategoryPage = styled.div`
    width: 100%;
    height: 100%;

    header{
        height:70px;
        padding: 20px 0;

        .Search{
            height:100%;
            display:flex;
            align-items:center;
            padding-left: 16px;

            svg{
                height:23px;
                width:23px;
            }

            .Search--Container{
                width:100%;
                display:flex;

                .Input{
                    flex: 1 0 auto;
                    transition: width 200ms;
                    width: ${props=>props.showSearch ? 'calc(100% - 80px)':'calc(100% - 16px)'}
                }

                .Cancel{
                    flex: 0 0 auto;
                    padding: 0 16px;
                }
            }
        }
    }
`;


export default StyledCategoryPage;