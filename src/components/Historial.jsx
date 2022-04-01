import React from 'react';

class Historial extends React.Component {

    render(){
        return(
            <div className='historial'>
                <h3>Historial de selecciones:
                    <ul>{this.props.historialSelecciones}</ul>
                </h3>
            </div>
        )
    }
}

export default Historial;