import React, { useState } from "react";
import './Button.css'
import local_grocery_store from './img/local_grocery_store.png'
const Button = (props) => {

    const classnamesArr = []
    for (const property in props) {
        switch (property) {
            case 'variant':
                classnamesArr.push(props.variant)
                break;
            case 'disableShadow':
                classnamesArr.push('disableShadow')
                break;
            case 'disabled':
                classnamesArr.push('disabled')
                break;
            case 'startIcon':
                classnamesArr.push(props.startIcon)
                break;
            case 'endIcon':
                classnamesArr.push(props.endIcon)///////should use the end and start to know where to put
                break;
            case 'size':
                classnamesArr.push(props.size)
                break;
            case 'color':
                classnamesArr.push(props.color)
                break;
            default:
                break;
        }

    }

    return (
        <div>
            <button className={classnamesArr.join(' ')}>
                {props.startIcon ? <img src={props.startIcon} className='icon'></img> : ''}
                Default
                {props.endIcon ? <img src={props.endIcon} className='icon'></img> : ''}
            </button>
            <p style={{fontSize:'8px'}}>
                {classnamesArr.length > 0 ? classnamesArr[0] : 'Default'}
            </p>
        </div>
    )

}

export default Button;