import styled from "styled-components";

const StyledQuostOptions = styled.div`

    .ToggleOptionType{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items:center;

        p{
            font-size: 1.1rem;
            color: ${props=>props.theme.primaryTextColor};
        }

        & > div{
            margin-right: 11px;
        }
    }
    .Options{
        list-style-type: none;

        li{
            margin-bottom:20px;
        }
    }

    .AddOption{
        svg{
            color: ${props=>props.theme.optionBorder};
        }
    }
`;

export default StyledQuostOptions;