import React, { useCallback } from 'react'
import { Editable, useSlate, } from 'slate-react'
import { toggleMark } from '../utils/textUtils'
import styled from 'styled-components'



const HOTKEYS = {
  'b': 'bold',
  'i': 'italic',
  'u': 'underline',
}


const TextEditor = ({handleFocus = ()=>{},readOnly = false,maxText,...otherProps}) => {
  const renderElement = useCallback(props => <Element {...props} style = {{...otherProps}}/>, [])
  const renderLeaf = useCallback(props => <Leaf {...props} style = {{...otherProps}}/>, [])
  const editor = useSlate();

  const style = {
    width:'100%',
    height:'100%'
  }

  return (
      <Editable
        style = {style}
        onFocus = {()=>handleFocus(true)}
        onBlur = {()=>handleFocus(false)}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly = {readOnly}
        placeholder="Type question here"
        spellCheck = {false}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return 
          }

          if(event.key === 'v'){
            return
          }

          if(HOTKEYS.hasOwnProperty(event.key)){
            toggleMark(editor, HOTKEYS[event.key])
          }
        }}
      />
  )
}


const Element = ({ attributes, children, element, style = {} }) => {
  const defaulStyle = {
    fontSize: "40px",
    fontWeight: 600,
    ...style
  }

  let cAttributes = {
    style: {
      ...defaulStyle,
      
    },
    ...attributes
  }
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...cAttributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...cAttributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...cAttributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...cAttributes}>{children}</h2>
    case 'list-item':
      return <li {...cAttributes}>{children}</li>
    case 'numbered-list':
      return <ol {...cAttributes}>{children}</ol>
    default:
      return <p {...cAttributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf, style = {} }) => {
  const defaulStyle = {
    fontSize: "3rem",
    fontWeight: 600,
    ...style
  }
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span style = {{
    ...defaulStyle,
  }} {...attributes}
  >{children}</span>
}


export default TextEditor