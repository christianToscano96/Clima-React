import React, { useState} from 'react';

function Formulario({datosConsulta}) {

    // state del componente
    //busqueda = state, guardarBusqeda = this.setState([])
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })

    const handleChange = e => {
        //cambiar el state
        guardarBusqueda({
           ...busqueda,
           [e.target.name] : e.target.value 
        });
        
    }

    const consultarClima = e => {
        e.preventDefault();

        //pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda);
    }

    return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="seleccione un paìs"></option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mèxico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Peru</option>
                    <option value="ES">España</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block white accent-4" value="Buscar CLima"/>
            </div>
        </form>
    )
}

export default Formulario;