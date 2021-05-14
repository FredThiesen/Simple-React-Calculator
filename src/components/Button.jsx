import React from 'react'
import './Button.css'

export default props =>
    <button 
        onClick={event =>props.click && props.click(props.label)}
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
    `}>
        
        {props.label}</button>




//fazendo sem o template string
//export default props => {
   // let classes = 'button '
  //  classes += props.operation ? 'operation' : ''
   // classes += props.double ? 'double' : ''
   // classes += props.triple ? 'triple' : ''
    
   // return <button ClassName={classes}>
   //    {props.label}</button>
//}