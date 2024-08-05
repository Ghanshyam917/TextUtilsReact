import React from 'react'

function Alert(props) {

    const Capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert)} :</strong> {props.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    </div>
  )
}

export default Alert
