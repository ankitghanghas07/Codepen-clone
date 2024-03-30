import React, { useState } from 'react'
// import all the css needed for the editor and its theme
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

// import all syntax highlight and error highlighting features
import 'codemirror/mode/xml/xml' // xml <-> HTML
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {

    const {displayName, language, value, onChange} = props;

    function handleChange(editor, data, value){
        onChange(value);
    }

    const [open, setOpen] = useState(true);

  return (
    <div className='editor-container' style={open ? null : {flexGrow : 0}} >
        <div className="editor-header">
            {displayName}
            <button  
                onClick = {() => {
                    setOpen(prevValue => !prevValue);
                }}
            >O/C</button>
        </div>
        <ControlledEditor 
            className='codemirror-wrapper'
            onBeforeChange={handleChange}
            value = {value}
            options = {{
                lineWrapping : true,
                mode : language,
                lineNumbers : true,
                theme : 'material',
            }}
        />
    </div>
  )
}
