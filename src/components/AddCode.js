import React, { useState } from 'react';
import StyledAddCode from '../styled/StyledAddCode';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const AddCode = ()=>{
    const [code,setCode] = useState(
        `function add(a, b){
        return a + b;
    }`)

    console.log(languages)

    return (
        <StyledAddCode>
            <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            }}
        />
        </StyledAddCode>
    );
}

export default AddCode;