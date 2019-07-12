import React from 'react';
//componentes
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const datosConsulta = datos => {
    console.log(datos);
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
