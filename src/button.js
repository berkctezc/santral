import React from "react"; 

const Button  = ({title}) => {
    return <a className="App-button">{title}</a>
};

const YuvarlakButton = ({title}) => {
    return <a className="App-button1">{title}</a>
}

const DenemeButton = ({title}) => {
    return <a className="App-button2">{title}</a> 
}

export {Button,YuvarlakButton , DenemeButton};
export default Button;