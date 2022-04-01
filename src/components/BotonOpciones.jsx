import React from 'react';
import './styles/BotonOpciones.css';


class BotonOpciones extends React.Component {    
    render(){
        return (
            <div className='botones'>
            <div className='botonOpciones'>
                <button id='a' onClick={this.props.handleClick}>
                    A
                </button>
                <p>{this.props.opcionA}</p>
            </div>
            <div className='botonOpciones'>
                <button id='b' onClick={this.props.handleClick}>
                    B
                </button>
                <p>{this.props.opcionB}</p>
            </div>
            </div>
        )
    }
}

export default BotonOpciones;