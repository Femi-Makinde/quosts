import React from 'react';
import { StyledMarkButton } from '../styled/StyledButtons';
import { useSlate } from 'slate-react';
import { isBlockActive, isMarkActive, toggleMark, toggleBlock } from '../utils/textUtils';


const MarkButton = ({ format, children }) => {
    const editor = useSlate()
    return (
      <StyledMarkButton
          className = "MarkButton"
          isActive={isMarkActive(editor, format)}
          onMouseDown={event => {
            console.log("CLICKED MOUSEDOWN")
            event.preventDefault()
            toggleMark(editor, format)
          }}
      >
        {
            children
        }
      </StyledMarkButton>
    )
}



const BlockButton = ({ format, children }) => {
    const editor = useSlate()
    return (
      <StyledMarkButton
        active={isBlockActive(editor, format)}
        onMouseDown={event => {
          event.preventDefault()
          toggleBlock(editor, format)
        }}
      >
        {children}
      </StyledMarkButton>
    )
  }
  
  







  export default MarkButton;