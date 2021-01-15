import styled from 'styled-components';

const StyledQuostOptionsLarge = styled.div`
    padding:0 20px;
    width:100%;
    .ToggleOptionType{
        display:flex;
        align-items:center;

        p{
            font-size:1.3rem;
            margin-left:10px;
        }
    }

    .Options{
        list-style-type: none;
        margin-top:30px;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
        grid-gap:20px;

        li{
            .quost-option{
                height: 50px;
            }
        }
    }
`;

export default StyledQuostOptionsLarge;