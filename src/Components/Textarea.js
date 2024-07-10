import React, {useState} from 'react'
import logo from './logo.png'; 

export default function Textarea(props) {
    const [text, setText]= useState('');
    const handleUpclick = () => {
        let newText= text.toUpperCase();
        setText(newText)
    };
    const handleLoclick = () => {
        let newText= text.toLowerCase();
        setText(newText)
    };
    const handleClclick = () => {
        let newText= '';
        setText(newText)
    };
 
    const handleNoclick = () => {
        let newText = text.replace(/(^\w|\.\s*\w|\?\s*\w|\!\s*\w)/g, (toReplace) => {
            return toReplace.toUpperCase();
        });
        setText(newText);
    };
 
    const handleRoExclick = () => {
        let Text= text.trim();
        let newText=Text.replace(/\s+/g, ' ')
        setText(newText)
    };
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
    };
    const handleOnchange = (event) => {
        setText(event.target.value);
    };
  return (
    <div className="conatainer" style={{color: props.mode===`dark`?`white`:`black`}}>
    <h2>{props.heading}</h2>
    <div>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode===`dark`?`black`:`white`, color: props.mode===`dark`?`white`:`black`}} value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
    </div>
    <button type="button" onClick={handleUpclick} className="btn btn-info mx-1 ">CapitalizedText</button>
    <button type="button" onClick={handleLoclick} className="btn btn-info mx-1 my-1">SmallText</button>
    <button type="button" onClick={handleClclick} className="btn btn-info mx-1 my-1">ClearText</button>
    <button type="button" onClick={handleNoclick} className="btn btn-info mx-1 my-1">NormalText</button>
    <button type="button" onClick={handleRoExclick} className="btn btn-info mx-1 my-1">RemoveExtraSpace</button>
    <button type="button" onClick={handleCopyClick} className="btn btn-info mx-1 my-1">CopyText</button>
    <div className='container my-4' style={{color : props.mode===`dark`?'white':`black`}}>
        <h2>Your Text Analyse</h2>
        <p>{text.length} characters, {text.split(" ").filter((e)=>{return e.length!== 0}).length} words, {text.split(".").length-1} sentences and {text.split(/\n+/).length-1} paragraphs.</p>
        <p>{0.008*(text.split(" ").length-1)} minutes read.</p>
    </div>
    <div className='container my-4'>
        <h2>Your Text Preview</h2>
        <p>{text}</p>
    </div>
    <div className="container"style={{backgroundColor : props.mode===`dark`?`black`:`white`, color: props.mode===`dark`?`white`:`black`}}>
                    <div className='text-center'><h2 className="mx-10"style={{backgroundColor : props.mode===`dark`?`black`:`white`, color: props.mode===`dark`?`white`:`black`}}>Word Frequency Cloud. Which are the most frequently used words?
                    </h2> </div>            
            Lastly, we help you visualise the word frequency of a text via the word frequency cloud, which shows each word in a bigger or smaller text size, depending on how many times it is found in the text. The bigger the word, the more frequently it occurs. Very common words have been removed to allow you to see the important words in the text. Note: The results work better with longer texts.
                <div className='container text-center my-10 '>
                    <img src={logo}   />
                </div>
    </div>
    </div>
  )
}
