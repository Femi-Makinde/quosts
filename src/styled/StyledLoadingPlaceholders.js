import styled from 'styled-components';


const StyledSearchItemLoader = styled.div`
    display: flex;
    height: 100%;

    .Container{
        padding: 0 16px;
        width: 100%;
        height: 100%;

        .Container--Child{
            width: 100%;
            height: 100%;


            .icon{
                height: 20px;
                width: 20px;
                border-radius: 5px;
                margin-right: 16px;
                animation-delay: ${props=>(props.index * .03) + 's'};

            }

            .title{
                height:8px;
                width: 8px;
                flex-grow: 1;
                border-radius: 5px;
                animation-delay: ${props=>(props.index * 0.05) + 's'};
            }
        }
    }
`

export { StyledSearchItemLoader }