import React,{useState} from 'react'
import Button from './Button';


function TextForm(props) {
    
const [text,setText] = useState("");

 const handleOnchange = (event) =>{
    setText(event.target.value)
 }
 const handleUpCase = () =>{
    setText(text.toUpperCase())
    props.alert("success")
    props.msg("Text has been Successfully Converted to Uppercase.")
 }
 const handleLwCase = () =>{
    setText(text.toLowerCase())
    props.alert("success")
    props.msg("Text has been Successfully Converted to Lowercase.")
 }
 const handleClear = () =>{
    setText('')
    props.alert("success")
    props.msg("Text has been Cleared SuccessFully")
 }
 const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("success")
    props.msg("Copied!")
 }

  return (
    <>
    <div className='container'>
      <div className="my-3" style={{color:props.mode=='light'?'black':'white'}}>
            <h3>{props.heading}</h3>
            <textarea value={text} onChange={handleOnchange} className="form-control" style={{backgroundColor:props.mode=='light'?'white':'black',color:props.mode=='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <Button handleUpCase={handleUpCase} handleLwCase={handleLwCase} handleClear={handleClear} handleCopy={handleCopy}/>
    </div>
    <div className="container py-2" style={{color:props.mode=='light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Word and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Above Text Box Preview Here....'}</p>
    </div>
    </>
  )
}

export default TextForm
