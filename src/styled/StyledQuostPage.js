import styled from "styled-components";
import { animated } from "react-spring";

const StyledQuostPage = styled.div`
    height:100%;
    width:100%;
    padding-top: 70px;
    position:relative;

    .TextEditor{
        height:200px;
        padding: 0 16px;
    }
    .QuestionOptions{
        margin-bottom: 50px;
        padding: 0 16px;
    }

    .DurationSetter{
        display: flex;
        align-items:center;
        /* justify-content:center; */
    }
`;

const EditorFooter = styled.div`
    height: 60px;
    background:white;
    padding:7px 16px;
    width:100%;
    display:flex;
    justify-content:space-between;
    background: ${props=>props.theme.secondaryBackgroundColor2};
    position: absolute;
    box-shadow: 0px -5px 10px rgba(0,0,0,.05);
    

    .Formatters{
        display:flex;
        align-items:center;
        padding: 5px 0;

        .MarkButton{
            height:100%;
            display:flex;
            align-items:center;
            margin-right: 20px;
            padding: 0 7px;

            svg{
                width:22px;
                height:22px;
            }

            :first-child{
                margin-left:-7px;
            }

            :last-child{
                border-right: 1px solid ${props=>props.theme.borderColor1};
                padding-right:20px;
            }
        }
    }
    
    .TextCounter{
        display: flex;
        align-items: center;
    }
`;

const StyledEditorFooter = animated(EditorFooter);

export {StyledQuostPage as default, StyledEditorFooter}