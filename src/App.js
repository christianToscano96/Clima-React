import React, { useState } from 'react';
//componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {

  //State principal
  //ciudad = state, guardarCiudad = this.setState()
  const [ ciudad , guardarCiudad  ] = useState ('');
  const [ pais , guardarPais ] = useState ('');

  //para el error
  const [ error, guardarError] = useState(false);

  const datosConsulta = datos => {
    
    //validar que ambos campos esten 
    if(datos.ciudad === '' || datos.pais === '') {
      //error
      guardarError(true);
      return;
    }

    //ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  //Cargar un componente Condicionalmente 
  let componente;
  if(error) {
    //hay un error
    componente = <Error mensaje ='Ambos campos son obligatorios' />
  } else {
    //mostrar clima
    componente = null;
  }

  return (
    <div className="App">
      <Header 
      titulo="Clima con React"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>

            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
