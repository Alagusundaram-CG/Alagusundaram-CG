import React from 'react';
const Replacer = ({ data }) => {
    console.log(typeof data);
    let str = data;
    const text = str.replace(/\\n/g, '<br/>');
    console.log(text, 'text');
    return (
        <div dangerouslySetInnerHTML={{ __html: text }} />
    )
}
export default Replacer