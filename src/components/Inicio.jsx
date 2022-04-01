import React from "react";
import datosJson from "./data.json";
import "./styles/Inicio.css";
import BotonOpciones from "./BotonOpciones";
import Historial from "./Historial";

class Inicio extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        seleccionAnterior: "",
        historialSelecciones:[],
        contador: 0,
    };
    }
    
    componentDidMount(){
        if(this.state.contador === 0){
        alert('Bienvenido al juego!')
        }
    }

    
    handleClick = (evento) => {
    const id = evento.target.id;

    if(this.state.contador === 0){
        if(id ==='a'){
            console.log('Click opcion A')
            this.setState({
                contador: 1,
                seleccionAnterior:'A'
            })
        }else if(id ==='b'){
            console.log('Click opcion B')
            this.setState({
                contador: 2,
                seleccionAnterior:'B'
            })
        }
    }
    else if(this.state.contador === 1){
        if(id ==='a'){
                    this.setState({
                    contador: 3,
                    seleccionAnterior:'A'
                })
        }else if(id ==='b'){
                this.setState({
                    contador: 4,
                    seleccionAnterior:'B'
                })
            } 
    }else if(this.state.contador === 2){
        if(id ==='a'){
                    this.setState({
                    contador: 3,
                    seleccionAnterior:'A'
                })
        }else if(id ==='b'){
                this.setState({
                    contador: 4,
                    seleccionAnterior:'B'
                })
            } 
    }else if(this.state.contador === 3){
        if(id ==='a'){
                    this.setState({
                    contador: 5,
                    seleccionAnterior:'A'
                })
        }else if(id ==='b'){
                this.setState({
                    contador: 6,
                    seleccionAnterior:'B'
                })
            } 
    }else if(this.state.contador === 4){
        if(id ==='a'){
                    this.setState({
                    contador: 5,
                    seleccionAnterior:'A'
                })
        }else if(id ==='b'){
                this.setState({
                    contador: 6,
                    seleccionAnterior:'B'
                })
            } 
    }else if(this.state.contador === 5){
        if(id ==='a'){
                    this.setState({
                    contador: 7,
                    seleccionAnterior:'A'
                })
        }else if(id ==='b'){
                this.setState({
                    contador: 8,
                    seleccionAnterior:'B'
                })
            } 
    }else if(this.state.contador === 6){
        if(id ==='a'){
                    this.setState({
                    contador: 7,
                    seleccionAnterior:'A'
                })
        }else if(id ==='b'){
                this.setState({
                    contador: 8,
                    seleccionAnterior:'B'
                })
            } 
    }
}


    render() {
        return (
            <div className="principal">
                <div className="principioHistoria">
                    <p>{datosJson[this.state.contador].historia}</p>
                </div>                
                <BotonOpciones 
                    handleClick={this.handleClick}
                    opcionA={datosJson[this.state.contador].opciones.a}
                    opcionB={datosJson[this.state.contador].opciones.b}
                />
                <div className="Opciones">
                <h3 className="seleccionAnterior">Selección anterior: {this.state.seleccionAnterior}</h3>
                <Historial />
                </div>
            </div>
        );
    }
}

export default Inicio;
