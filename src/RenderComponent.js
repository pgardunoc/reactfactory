import React from "react";
import { Button, Checkbox, Slider, Switch } from '@material-ui/core';

import JsonTemplate from './resources/components.json';


function renderer() {

   
    let elements = [];

      Object.keys(JsonTemplate).forEach((key) => {
        const value = JsonTemplate[key];        
        console.log(value.id);
        const elementId = value.id;
        switch (key) {
            case "button":
                elements.push(React.createElement(Button, {variant:"contained" ,color:"primary", "id":elementId}, "test"));
                break;
            case "slider":
                elements.push(React.createElement(Slider, {valueLabelDisplay:"auto", defaultValue:30, step:30, min:30, max:330, "id":elementId}, ""));
                break;
            case "checkbox":
                elements.push(React.createElement(Checkbox, {value:"value", "aria-label": "Checkbox A", "id":elementId}, ""));
                break;
            case "switch":
                elements.push(React.createElement(Switch, {checked:"true", name:"checkedB", "id":elementId}, ""));
                break;
            default:
                console.log("default");
        }
      });

    return elements;
}

export default renderer;
