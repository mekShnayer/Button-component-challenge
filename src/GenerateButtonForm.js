import React, { useState } from "react";
import Button from "./Button";
import local_grocery_store from './img/local_grocery_store.png'
import petsIcon from './img/pets.png'

function GenerateButtonForm() {
    const [newButton, setNewButton] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        const variant = document.getElementById('variant').value
        const size = document.getElementById('size').value
        const color = document.getElementById('color').value
        const endIcon = document.getElementById('endIcon').value
        const startIcon = document.getElementById('startIcon').value
        const resultObj = {
            variant,
            size,
            color,
            endIcon,
            startIcon

        }
        console.log(resultObj)
        setNewButton(resultObj)
        document.getElementById('variant').value = ''
        document.getElementById('size').value = ''
        document.getElementById('color').value = ''
        document.getElementById('endIcon').value = ''
        document.getElementById('startIcon').value = ''
    }

    return (

        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <label for="variant">Variant:</label>
                <select name="variant" id="variant">
                    <option hidden ></option>
                    <option value="outline">Outline</option>
                    <option value="text">Text</option>
                </select>

                <label for="size">size:</label>
                <select name="size" id="size">
                    <option hidden></option>
                    <option value="sm">small</option>
                    <option value="md">medium</option>
                    <option value="lg">Large</option>
                </select>

                <label for="startIcon">startIcon:</label>
                <select name="startIcon" id="startIcon">
                    <option hidden></option>
                    <option value={petsIcon}>pets</option>
                    <option value={local_grocery_store}>shopping cart</option>

                </select>
                <label for="endIcon">endIcon:</label>
                <select name="endIcon" id="endIcon">
                    <option hidden></option>
                    <option value={petsIcon}>pets</option>
                    <option value={local_grocery_store}>shopping cart</option>

                </select>
                <label for="color">color:</label>
                <select name="color" id="color">
                    <option hidden></option>
                    <option value="default">Default</option>
                    <option value="primary">primary</option>
                    <option value="secondary">secondary</option>
                    <option value="danger">danger</option>
                </select>
                <input type="submit" value='submit'></input>

            </form>
            <button onMouseDown={() => setNewButton({})}>test</button>
            <div id="new-button-display">
                {Object.keys(newButton).length !== 0 ? <Button {...newButton} /> : ''}
            </div>
        </div>


    )
}

export default GenerateButtonForm;