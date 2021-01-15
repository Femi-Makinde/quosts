import { Transforms, Editor, Node } from "slate"


const LIST_TYPES = ['numbered-list', 'bulleted-list']
export const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)
  
    Transforms.unwrapNodes(editor, {
      match: n => LIST_TYPES.includes(n.type),
      split: true,
    })
  
    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    })
  
    if (!isActive && isList) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block)
    }
  }
  
export const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)
  
    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  }
  
export const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === format,
    })
  
    return !!match
  }
  
export const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  }

export const serialize = value => {
    return (
      value
        // Return the string content of each paragraph in the value's children.
        .map(n => Node.string(n))
        // Join them all with line breaks denoting paragraphs.
        .join('\n')
    )
  }
  
  // Define a deserializing function that takes a string and returns a value.
export const deserialize = string => {
    // Return a value array of children derived by splitting the string.
    return string.split('\n').map(line => {
      return {
        children: [{ text: line }],
      }
    })
  }


  export function withCharLimit(limit = 200) {
    return function charLimitPlugin(editor) {
      const { insertText } = editor;
      editor.insertText = (text) => {
        let currentTextLength = Editor.string(editor, []).length;
        if(currentTextLength < limit) {
          insertText(text);
        }
        // else ignore the call
      }
      // do this for all the other necessary functions
      return editor;
    }
  }