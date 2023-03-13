import React from "react";
import './Button.css'
const Button = (props) => {
    console.log(props)//this is an object
    if (props.length ==0){
        let className='default'
    }

    //////////////
    //<Button /> - default 
    // <Button variant="outline" />
    // <Button variant="text" />
    // <Button disableShadow" />
    // <Button disabled />
    // <Button startIcon="local_grocery_store" />
    // <Button endIcon="local_grocery_store" />
    // <Button size="sm" />
    // // <Button size="md" />
    // <Button size="lg" />
    // <Button color="default" />
    // <Button color="primary" />
    // <Button color="secondary" />
    // <Button color="danger" />

    //&&:hover , &:focus
    ////////////////
    return (
        <div>
            <button className={`${props.varient} ${props.color} ${props.size} ${props.startIcon} `}>Default</button>
        </div>
    )

}

export default Button;