import styled from "styled-components";

const StyledQuostOption = styled.div`
    height: 45px;
    width: 100%;
    display:flex;
    border: ${props=>`1px solid ${props.selected ? props.theme.primaryMainColor :props.theme.optionBorder}`};
    border-radius: 12px;

    .InputField{
        flex: 1 0 auto;
        overflow: hidden;
        position: relative;

        span{
            pointer-events:none;
            display:flex;
            align-items:center;
            color: ${props=>props.theme.secondaryTextColor};
        }

        .I{
            width:100%;
            height: 100%;
            border:none;
            background: inherit;
            padding-left: 12.5px;
            font-size: 1.4rem;
            font-weight: 500;
            font-family: Poppins, sans-serif;
            position: absolute;
            top:0;
            left:0;
        }

        input{
            text-transform: capitalize;
            user-select: none;
            -webkit-user-select:none;
            color: ${props => props.selected ? props.theme.primaryMainColor : props.theme.primaryTextColor};

            &::selection{
                background-color: transparent;
            }
        }
    }

    .OptionSelector{
        width: 40px;
        flex: 0 0 auto;
    }
`;

export default StyledQuostOption;