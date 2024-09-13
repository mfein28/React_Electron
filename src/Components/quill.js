import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import React, {useState} from 'react';

export default function Quill() {
    const [convertedText, setConvertedText] = useState("Some default content");
    return (
        <div>
            <ReactQuill
                theme='snow'
                value={convertedText}
                onChange={setConvertedText}
                style={{height: '250px'}}
            />
        </div>
    );
}