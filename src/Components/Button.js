import React from 'react'


function Button(props) {

  return (
    <div>
      <button type="button" disabled={props.handleDisable} onClick={props.handleUpCase} className="btn btn-primary mx-1 my-1">Convert To UpperCase</button>
      <button type="button" disabled={props.handleDisable} onClick={props.handleLwCase} className="btn btn-primary mx-1 my-1">Convert To LowerCase</button>
      <button type="button" disabled={props.handleDisable} onClick={props.handleClear} className="btn btn-primary mx-1 my-1">Clear Text</button>
      <button type="button" disabled={props.handleDisable} onClick={props.handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
    </div>
  )
}

export default Button
